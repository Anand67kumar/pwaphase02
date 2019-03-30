var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window)
{
  console.log("IndexedDB is not supported");
}
//IndexDB creation
var request;
var store;

var open=idb.open("storeData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(e){
  request=e.target.result;
  var request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});

  console.log("store is created");
}
open.onerror=function(error){
console.log("Error is occured");
}
open.onsuccess=function(e){
request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
console.log(data);
personalinfo(data.target.result);
}
}
var parent=document.querySelector(".parent");
var right=document.querySelector(".right");

var left=document.querySelector(".left");
function personalinfo(pi) {
  var image=document.createElement("img");
  image.src="images/resume.svg";
  image.alt=pi.name;
  left.append(image);
  // parent.append(left);
  var hi=document.createElement("h2");
  hi.textContent=pi.name;
  left.append(hi);

  var mn=document.createElement("h2");
  mn.textContent=pi.mobile;
  left.append(mn);

  var em=document.createElement("h2");
  em.textContent=pi.email;
  left.append(em);

  var add=document.createElement("h2");
  add.textContent=pi.address;
  left.append(add);

  var head11=document.createElement("h1");
  head11.textContent="CARRER OBJECTIVE";
  right.append(head11);

  var carrer=document.createElement("h3");
  carrer.textContent=pi.carrer;
  right.append(carrer);
  var head12=document.createElement("h1");
  head12.textContent="EDUCATION DETAILS";
  right.append(head12);

  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>ginstitute</th><th>gbranch</th><th>gyop</th><th>gper</th></tr>";
  tr2="";
  for(var i in pi.education){

tr2=tr2+"<tr><td>"+pi.education[i].ginstitute+"</td><td>"+pi.education[i].gbranch+"</td><td>"+pi.education[i].gyop+"</td><td>"+pi.education[i].gper+"</td><tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
var sac=document.createElement("h1");
sac.textContent="TECHNICAL SKILLS";
right.append(sac);



var skills=document.createElement("skills");
skills.textContent=pi.skills;
right.append(skills);
}
