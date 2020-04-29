
  window.addEventListener("load",function(){
     var mailbox =document.querySelector(".email-us");
        var detainment=this.document.querySelector(".detainment");
        var detainment1=this.document.querySelector(".detainment-1");
        var detainment2=this.document.querySelector(".detainment-2");
        var bye=this.document.querySelectorAll(".bye");

   //邮箱点击事件
   function openEmailStay (){    
        mailbox.onclick=function(){
         detainment.style.display="block";
        
        }
     }
     
   // 邮箱移入事件
     function closeEmailStay(){
      detainment1.onmouseover=function(){
         detainment1.style.display="block";
         detainment2.style.display="none";
         
       }
     }
    
     //邮箱移除弹出挽留
   function openInquiry(){
    detainment.onmouseout=function(){
       detainment2.style.display="block";
       detainment1.style.display="none";
      
     }
    
   }
   
  
    //关闭邮箱
   function closeInquiry(){
     for(var i=0; i<bye.length; i++){
      bye[i].onclick=function(){
        detainment.style.display="none"
      }
     }
   
   }
    openInquiry()
   closeEmailStay()
   closeInquiry()
   openEmailStay()
   
   
 
// index页面回到顶部

var  btnn=document.querySelector(".dingbu");
var screenTop=null, te=null; 
window.onscroll = function(){
  screenTop = document.documentElement.scrollTop;
  btnn.onclick=function(){
        clearInterval(te);
        te=setInterval(function( ){
        screenTop=screenTop-50;
        window.scrollTo(0,screenTop);
        if(screenTop<=0 ){
              clearInterval(te);
        }
          
        },20);
       
     }
}


//导航栏伪类的切换
var  clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
var  clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");
  function clicklinav (){
    for (let i=0;i<clickli.length;i++) {
      clicklia[i].onclick=function(){
        for (let j=0;j<clicklia.length;j++) {//第一层循环 控制全部的样式
           clicklia[j].className=""; 
         }
      //  //第二次循环控制点击的样式
      clicklia[i].className="a-default"; 
      }
     }

  }
 
  clicklinav ()
    
    






     
    }, false);
