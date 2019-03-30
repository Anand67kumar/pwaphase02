var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
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
var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}
}
var parent=document.querySelector(".parent")
function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/resume.svg";
    image.alt=d[i].name;
    // child.append(image);
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html";
    // child.append(link);
    var name=document.createElement("h3");

    name.textContent=d[i].name;
    // link.classList.add("link");
     link.href="resume.html?id="+d[i].id;
    link.textContent="view profile";

    child.append(image);
    child.append(name);
    child.append(link);
    parent.append(child);
  }

}
