function submitData(){
  var carrer=document.querySelector("#carrer").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var mobile=document.querySelector("#mobile").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyop=document.querySelector("#gyop").value;
  var gper=document.querySelector("#gper").value;

  var icollege=document.querySelector("#icollege").value;
  var igroup=document.querySelector("#igroup").value;
  var iyop2=document.querySelector("#iyop2").value;
  var iper=document.querySelector("#iper").value;
  var school=document.querySelector("#school").value;
  var medium=document.querySelector("#medium").value;
  var yop3=document.querySelector("#yop3").value;
  var sper=document.querySelector("#sper").value;
  var divison=document.querySelector("#divison").value;
  var skills=document.querySelector("#skills").value;
  //IndexDB Implemention

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
  store.put({
    carrer:carrer,
    name:name,
    email:email,
    address:address,
    mobile:mobile,
    education:[
      {
        ginstitute:ginstitute,
        gbranch:gbranch,
      gyop:gyop,
      gper:gper
    },
    {
      ginstitute:icollege,
      gbranch:igroup,
      gyop:iyop2,
      gper:iper
    },
    {
      ginstitute:school,
      gbranch:medium,
      gyop:yop3,
      gper:sper,
    }],
          divison:divison,

      skills:skills

  });

}




window.open("index.html");

}
