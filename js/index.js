window.onload=function(){
  //轮播图代码
 var swiper = new Swiper('.swiper-container', {
   spaceBetween: 9,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
//导航栏伪类的切换
var  clickli=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li");
var  clicklia=document.querySelectorAll("nav.com-nav .nav-box2 .nav-box2-ul li a ");

 for (let i=0;i<clickli.length;i++) {
   clicklia[i].onclick=function(){
     for (let j=0;j<clicklia.length;j++) {//第一层循环 控制全部的样式
       console.log(j )
        clicklia[j].className=""; 
      }
   //  //第二次循环控制点击的样式
   clicklia[i].className="a-default"; 
   }
  }
 
// 回到顶部
    var  btn=document.querySelector(".dingbu");
     var screenTop=null, te=null; 
     window.onscroll = function(){
       screenTop = document.documentElement.scrollTop;
       btn.onclick=function(){
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
    
 




}