const webcamElement = document.getElementById('webcam');
let net;

async function app() {
  console.log('loading mobilenet...');
  // load the model
  net = await mobilenet.load();
  console.log('successufully loaded the model');
  // make predictrion of your image
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
}
async function setupWebcam() {
  return new promise((resolve, reject)=>{
    const navigatorAny = navigator.getUserMedia ||
    navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
         navigatorAny.msGetUserMedia;
     if (navigator.getUserMedia) {
       navigator.getUserMedia({video: true},
         stream => {
           webcamElement.srcObject = stream;
           webcamElement.addEventListener('loadeddata',  () => resolve(), false);
         },
         error => reject());
     } else {
       reject();
     }
   });
 }
app();
