//Create Text Node

var h = document.createElement('h1');
var myVal = document.createTextNode('Hello World!');
h.appendChild(myVal)
document.querySelector("h1").appendChild(h);


//while Loop
var val = 5;

while  (val  > 0){
    console.log(val);
    val--;

}