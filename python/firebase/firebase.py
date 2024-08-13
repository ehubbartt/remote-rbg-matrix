import time
import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase Admin SDK
cred = credentials.Certificate('firebase/firebase-cert.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://remote-led-matrix-default-rtdb.firebaseio.com/'
})

# Initialize LED Matrix

def listener(event):
    # Listen for changes in Firebase and update display
    print(event.data)

# Attach Firebase listener
db.reference('matrixData').listen(listener)

# Keep the program running
while True:
    time.sleep(1)
