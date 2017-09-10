# Image Classifier Bot
### Application Info
This application is built upon Node.js and Python. The client uses websockets to send images over to the server, and the server spawns a child python processes to run forward propagation through inception's pretrained neural network using Tensorflow. The python process returns the results to the server, which forwards the results back to the client via websockets. 
### Inception Model
The backend tensorflow application heavily utilizes inception's pretrained image classification model. The model is trained on 3000 classes of objects and animals, but unfortunately, is not trained on humans. If you tried directing the camera at yourself, I appoligize for whatever the model labeled you as. 
### Video Streaming Issues? 
 - Make sure your device has a camera 
 - Go on a browser which supports MediaDevices.getUserMedia (A modern version of Google-Chrome or Firefox will do) 
 - Give the application permission to use your camera
