/*
 * @Date         : 2020-04-26 10:12:53
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-04-26 17:23:28
 * @FilePath     : \03waimao\js\src\product_detail.js
 */



let init = () =>{
  new Vue({
    el: "#wrap",
    data: {
      piclist: ['../../img/img-1.png','../../img/img-2.png','../../img/img-3.png','../../img/img-4.png','../../img/img-1.png','../../img/img-2.png'],
      title: 'Liquid Nitrogen Dosing Machinee',
      currentPicIndex: 0,
      navlist: [
        {"name": "All Products", "href": "#products", "ifshow": true},
        {"name": "Product parameters", "href": "#params", "ifshow": true},
        {"name": "Structure diagram", "href": "#diagram", "ifshow": true},
        {"name": "Factory strength", "href": "#factory", "ifshow": true},
        {"name": "Detail display", "href": "#details", "ifshow": true},
        {"name": "Packaging & transportation", "href": "#package", "ifshow": true},
        {"name": "FAQ", "href": "#FAQ", "ifshow": true}
      ],
      currentNavIndex: 0,
      productslist: [
        {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-3.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-4.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-1.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-4.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-1.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-2.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-2.png"},
    {"title": "Category title",
      "desc": "Product introduction Product introductioning",
    "img": "img/img-4.png"},
      ],
      currentProductIndex: -1
    },
    computed: {
    },
    mounted() {
      
    },
    methods: {
      changePic(index) {
        this.currentPicIndex = index
      },
      toggleNav(index){
        this.navlist[index].ifshow = !this.navlist[index].ifshow
      },
      openDetails(index){
        this.currentProductIndex = index
      },
      closeDetails(){
        this.currentProductIndex = -1
      }
    },
  })
}

// document.addEventListener('DOMContentLoaded', ()=>{
  init()

// })