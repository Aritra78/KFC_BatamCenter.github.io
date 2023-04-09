let r;
let s;
let t;
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
     r = Math.floor(Math.random() * 9) + 1;
     s = Math.floor(Math.random() * 9) + 1;
     t = Math.floor(Math.random() * 9) + 1;
     x = Math.floor(Math.random() * 9) + 1;
     y = Math.floor(Math.random() * 9) + 1;
     z = Math.floor(Math.random() * 9) + 1;

     document.getElementById("rlabel").innerHTML = r;
     document.getElementById("slabel").innerHTML = s;
     document.getElementById("tlabel").innerHTML = t;
     document.getElementById("xlabel").innerHTML = x;
     document.getElementById("ylabel").innerHTML = y;
     document.getElementById("zlabel").innerHTML = z;

}