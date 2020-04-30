/*
 * @Date         : 2020-04-28 10:09:57
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-04-30 15:33:41
 * @FilePath     : \03waimao\js\com.js
 */

 var pop1,pop2;
 var clickli,clicklia;

//点击关闭按钮关闭Inquiry
function closeInquiry(){
    
     bye1.onclick=function(){
      pop.style.display="none";
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
         pop1=document.querySelector("#pop1");
         pop2=document.querySelector("#pop2");

//导航栏伪类的切换
    clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
     clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");
  clicklinav ()


     
    }, false);





    var closeStay = function(){
      hide(pop2)
    }
    var closeInput = function(){
      hide(pop1)
    }
    var openInput = function(){
      show(pop1)
    }
 
    var hide = function(e){
      e.classList.add('hidden')
    }
    var show = function(e){
      e.classList.remove('hidden')
    }
