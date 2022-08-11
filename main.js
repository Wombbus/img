Webcam.attach("camera")

Webcam.set({
  width:315,
  height:350,
  image_format:"jpeg",
  jpeg_quality:90
  
})

function take_snapshot(){
  Webcam.snap(function(dataURL){
    document.getElementById("result").innerHTML = "<img id='image' src='"+dataURL+"'></img>"
  })
}
console.log(ml5.version)

var url = "https://teachablemachine.withgoogle.com/models/l2SbxIf6v/"

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l2SbxIf6v/model.json",modelLoaded)

function modelLoaded(){
  console.log("loaded model properly")
}
function check(){
var img = document.getElementById("image")
classifier.classify(img,gotResults)
}
function gotResults(error,results){
if(error){
  console.error(error)
}
else{
  console.log(results)
}
}