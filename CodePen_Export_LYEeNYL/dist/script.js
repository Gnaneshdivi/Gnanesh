window.onload = function() {

var output = document.querySelector('.output');
var k = document.getElementById("myAudio");
var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');
  var socket = new WebSocket('wss://echo.websocket.org');


  // Handle any errors that occur.
  socket.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };


  // Show a connected message when the WebSocket is opened.
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
    socketStatus.className = 'open';
  };


  // Handle messages sent by the server.
  socket.onmessage = function(event) {
    var message = event.data;
    messagesList.innerHTML += '<li class="received"><span>Received:</span>' + message + '</li>';
  };


  // Show a disconnected message when the WebSocket is closed.
  socket.onclose = function(event) {
    socketStatus.innerHTML = 'Disconnected from WebSocket.';
    socketStatus.className = 'closed';
  };


  // Send a message when the form is submitted.
  form.onsubmit = function(e) {
    e.preventDefault();

    // Retrieve the message from the textarea.
    var message = messageField.value;

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message + '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;
  };


  // Close the WebSocket connection when the close button is clicked.
  closeBtn.onclick = function(e) {
    e.preventDefault();

    // Close the WebSocket.
    socket.close();

    return false;
  };


  
function handleOrientation(event) {
  
  var x = event.beta;  
  var y = event.gamma;
  if(x<30){ event.preventDefault();

    // Retrieve the message from the textarea.
    var message = "hi";

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message + '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;};
  if(y<20 ){ document.body.style.backgroundColor = "green"
           output.innerHTML  = "safe";};
  if(y>20 ){ document.body.style.backgroundColor = "red"
           window.alert("falling down");};
  if(y<-40 ){ document.body.style.backgroundColor = "red"
            window.alert("falling down");};
  if(x>40){ document.body.style.backgroundColor = "blue"
          window.alert("been lifted from frount");};
  if(x<-10){ document.body.style.backgroundColor = "blue"
           window.alert("trying to damage");};
  

  
  
  
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};
  x += 90;
  y += 90;
    
  
  ball.style.top  = (maxY*y/180 - 10) + "px";
  ball.style.left = (maxX*x/180 - 10) + "px";
  
}


window.addEventListener('deviceorientation', handleOrientation);

};