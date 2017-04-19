var div01=document.createElement("div");
div01.setAttribute("id","div01");
var div02=document.createElement("div");
div01.setAttribute("id","div02");
var div03=document.createElement("div");
div01.setAttribute("id","div03");
div02.appendChild(div03);
div01.appendChild(div02);
document.body.appendChild(div01);

var square01=document.createElement("div");
var square02=document.createElement("div");
var square03=document.createElement("div");
square02.appendChild(square03);
square01.appendChild(square02);
document.body.appendChild(square01);
