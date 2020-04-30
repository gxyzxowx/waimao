
 var mailbox,detainment,detainment1,detainment2,bye;
 var clickli,clicklia;
//点击邮箱弹出Inquiry
function openEmailStay (){    
  mailbox.onclick=function(){
   detainment.style.display="block";
  
  }
}
//点击关闭按钮关闭Inquiry
function closeInquiry(){
    
     bye1.onclick=function(){
      detainment.style.display="none";
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
         bye1=document.querySelector(".bye1");
         console.log(bye1)
         openEmailStay()
         closeInquiry()
          // openInquiry()
        // closeEmailStay()
     
     

//导航栏伪类的切换
    clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
     clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");
  clicklinav ()


     
    }, false);
