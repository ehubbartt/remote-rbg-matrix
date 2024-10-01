import time
import firebase_admin
from firebase_admin import credentials, db
from rgbmatrix import RGBMatrix, RGBMatrixOptions, graphics
import sys

# Initialize Firebase Admin SDK


def connect_to_firebase():
    try:
        cred = credentials.Certificate('/home/ethan/remote-rbg-matrix/matrix/bindings/python/cert/firebase-cert.json')
        firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://remote-led-matrix-default-rtdb.firebaseio.com/'
        })
        print("Firebase initialized")
        sys.stdout.flush()
    except Exception as e:
        print(f"Failed to initialize Firebase: {e}")
        sys.stdout.flush()
        time.sleep(5)
        connect_to_firebase()

connect_to_firebase()

# Initialize LED Matrix with options suitable for the bonnet
curBrightness = 50
curData = [[0, 0, 0] for _ in range(64 * 64)]
isOn = False

options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.brightness = curBrightness  # default value 1-100
options.hardware_mapping = 'adafruit-hat'  # Ensures correct hardware mapping for the bonnet
options.gpio_slowdown = 4

matrix = RGBMatrix(options=options)

def update_display(pixel_data):
    if len(pixel_data) != 64 * 64:
        print("Invalid data length, should be 4096 items")
        sys.stdout.flush()
        return
    
    if isOn:
        matrix.brightness = curBrightness
        
        for i in range(64):
            for j in range(64):
                index = i * 64 + j
                r, g, b = pixel_data[index]
                matrix.SetPixel(j, i, r, g, b)
    else:
        matrix.Clear()  # Clear the matrix if isOn is False
    status_ref = db.reference('lastUpdateMs')
    status_ref.set(str(int(time.time() * 1000)))

def imageListener(event):
    print("Image data changed")
    sys.stdout.flush()
    global curData, isOn
    if event.data:
        curData = event.data
        update_display(event.data)

def brightnessListener(event):
    print("Brightness changed")
    sys.stdout.flush()
    global curBrightness, isOn
    if event.data:
        sys.stdout.flush()
        curBrightness = event.data
        update_display(curData)

def isOnListener(event):
    print("isOn changed")
    sys.stdout.flush()
    global isOn
    if event.data is not None:
        isOn = event.data
        update_display(curData)

# Attach Firebase listeners
db.reference('matrixData').listen(imageListener)
db.reference('brightness').listen(brightnessListener)
db.reference('isOn').listen(isOnListener)

# Keep the program running
while True:
    time.sleep(1)
