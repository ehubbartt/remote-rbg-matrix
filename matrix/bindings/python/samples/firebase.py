import time
import firebase_admin
from firebase_admin import credentials, db
from rgbmatrix import RGBMatrix, RGBMatrixOptions, graphics

# Initialize Firebase Admin SDK
cred = credentials.Certificate('/home/ethan/remote-rbg-matrix/matrix/bindings/python/cert/firebase-cert.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://remote-led-matrix-default-rtdb.firebaseio.com/'
})
print("Firebase initialized")
# Initialize LED Matrix with options suitable for the bonnet

curBrightness = 50
curData = [0] * 64 * 64

options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.brightness = curBrightness # default value 1-100
options.hardware_mapping = 'adafruit-hat'  # Ensures correct hardware mapping for the bonnet
options.gpio_slowdown = 4

matrix = RGBMatrix(options=options)

def update_display(pixel_data):
    if len(pixel_data) != 64 * 64:
        print("Invalid data length, should be 4096 items")
        return
    
    for i in range(64):
        for j in range(64):
            index = i * 64 + j
            r, g, b = pixel_data[index]
            matrix.SetPixel(j, i, r, g, b)

def imageListener(event):
    if event.data:
        global curData
        curData = event.data
        update_display(event.data)

def brightnessListener(event):
    if event.data:
        global curBrightness
        curBrightness = event.data
        matrix.brightness = curBrightness

# Attach Firebase listener
db.reference('matrixData').listen(imageListener)
db.reference('brightness').listen(brightnessListener)

# Keep the program running
while True:
    time.sleep(1)
