import time
import firebase_admin
from firebase_admin import credentials, db
from rgbmatrix import RGBMatrix, RGBMatrixOptions, graphics

# Initialize Firebase Admin SDK
cred = credentials.Certificate('/home/ethan/remote-rbg-matrix/matrix/bindings/python/cert/firebase-cert.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://remote-led-matrix-default-rtdb.firebaseio.com/'
})

# Initialize LED Matrix with options suitable for the bonnet
options = RGBMatrixOptions()
options.rows = 64
options.cols = 64
options.chain_length = 1
options.parallel = 1
options.hardware_mapping = 'adafruit-hat'  # Ensures correct hardware mapping for the bonnet

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

def listener(event):
    if event.data:
        update_display(event.data)

# Attach Firebase listener
db.reference('matrixData').listen(listener)

# Keep the program running
while True:
    time.sleep(1)
