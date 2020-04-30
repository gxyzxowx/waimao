
 var mailbox,detainment,detainment1,detainment2,bye;
 var clickli,clicklia;
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

//导航栏切换
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
  window.addEventListener("load",function(){
       
         mailbox =document.querySelector(".email-us");
         detainment=document.querySelector(".detainment");
         detainment1=document.querySelector(".detainment-1");
         detainment2=document.querySelector(".detainment-2");
         bye=this.document.querySelectorAll(".bye");
       
        closeEmailStay()
        closeInquiry()
        openInquiry()
        openEmailStay()

//导航栏伪类的切换
    clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
     clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");
  clicklinav ()

// index页面回到顶部   
/* var  btnn=document.querySelector(".dingbu");
var screenTop=null, te=null; 

window.onscroll = function(){
  screenTop = document.documentElement.scrollTop;
  if(screenTop>0 ){
    btnn.style.display="block";
  }else{
    
    btnn.style.display="none";
    
  }
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
 */


     
    }, false);
