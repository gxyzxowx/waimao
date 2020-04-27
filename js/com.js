
  window.addEventListener("load",function(){
    

   var mailbox =document.querySelector(".email-us");
   var detainment=this.document.querySelector(".detainment");
   var detainment1=this.document.querySelector(".detainment-1");
   var detainment2=this.document.querySelector(".detainment-2");
   var bye=this.document.querySelector(".bye");
   mailbox.onclick=function(){
     console.log(detainment1)
    detainment.style.display="block";
    
  
   }
   detainment1.onmousemove=function(){
    detainment1.style.display="block";
     detainment2.style.display="none";
   }
     detainment1.onmouseout=function(){
      detainment2.style.display="block";
       detainment1.style.display="none";
     }
      bye.onclick=function(){
        detainment.style.display="none"
      }
    
     
    }, false);
