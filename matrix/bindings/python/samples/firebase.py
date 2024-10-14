import time
import firebase_admin
from firebase_admin import credentials, db
from rgbmatrix import RGBMatrix, RGBMatrixOptions, graphics
import sys

CONNECTION_TIMEOUT = 60

def connect_to_firebase():
    start_time = time.time()
    while True:
        try:
            cred = credentials.Certificate('/home/ethan/remote-rbg-matrix/matrix/bindings/python/cert/firebase-cert.json')
            firebase_admin.initialize_app(cred, {
                'databaseURL': 'https://remote-led-matrix-default-rtdb.firebaseio.com/'
            })
            print("Firebase initialized")
            sys.stdout.flush()
            return True
        except Exception as e:
            print(f"Failed to initialize Firebase: {e}")
            sys.stdout.flush()
            
            if time.time() - start_time > CONNECTION_TIMEOUT:
                print(f"Could not connect to Firebase after {CONNECTION_TIMEOUT} seconds. Stopping retries.")
                sys.stdout.flush()
                return False
            
            time.sleep(5)

if not connect_to_firebase():
    print("Exiting program due to Firebase connection failure.")
    sys.exit(1)

curBrightness = 50
curData = [[0, 0, 0] for _ in range(64 * 64)]
isOn = False

options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.brightness = curBrightness  # Default value 1-100
options.hardware_mapping = 'adafruit-hat'
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
        matrix.Clear()
    
    try:
        status_ref = db.reference('lastUpdateMs')
        status_ref.set(str(int(time.time() * 1000)))
    except Exception as e:
        print(f"Error updating lastUpdateMs: {e}")
        sys.stdout.flush()

def imageListener(event):
    try:
        print("Image data changed")
        sys.stdout.flush()
        global curData, isOn
        if event.data:
            curData = event.data
            update_display(event.data)
    except Exception as e:
        print(f"Error in imageListener: {e}")
        sys.stdout.flush()

def brightnessListener(event):
    try:
        print("Brightness changed")
        sys.stdout.flush()
        global curBrightness, isOn
        if event.data:
            curBrightness = event.data
            update_display(curData)
    except Exception as e:
        print(f"Error in brightnessListener: {e}")
        sys.stdout.flush()

def isOnListener(event):
    try:
        print("isOn changed")
        sys.stdout.flush()
        global isOn
        if event.data is not None:
            isOn = event.data
            update_display(curData)
    except Exception as e:
        print(f"Error in isOnListener: {e}")
        sys.stdout.flush()

def attach_firebase_listeners():
    try:
        db.reference('matrixData').listen(imageListener)
        db.reference('brightness').listen(brightnessListener)
        db.reference('isOn').listen(isOnListener)
    except Exception as e:
        print(f"Failed to attach Firebase listeners: {e}")
        sys.stdout.flush()
        time.sleep(5)
        attach_firebase_listeners()

attach_firebase_listeners()

while True:
    try:
        time.sleep(1)
    except KeyboardInterrupt:
        print("Program interrupted by user")
        sys.stdout.flush()
        break
    except Exception as e:
        print(f"Error in main loop: {e}")
        sys.stdout.flush()
        time.sleep(5)
