//轮播图函数
function slideshow(){
    let slideshow=document.getElementById("slideshow"),
    imgs=slideshow.getElementsByTagName("img"),
    page=slideshow.getElementsByTagName("span"),
    current=0;
    //图片淡出
    function slideoff(){
        imgs[current].className="";
        page[current].className="";
    }
    //图片淡入
    function slideOn(){
        imgs[current].className="active";
        page[current].className="active";
    }
    //切换图片
    function changeSlide(){
        slideoff();
        current++;
        if(current>=4){
            current=0;
        }
        slideOn();
    }
    var slideon=setInterval(changeSlide,2000);
    //当鼠标移入时清除轮播事件
    slideshow.onmouseover=function(){
        clearInterval(slideon);
    }
    //当鼠标移出的时候继续轮播
    slideshow.onmouseout=function(){
        slideon=setInterval(changeSlide,2000);
    }
    for(let i=0;i<page.length;i++){
        page[i].onmouseover=function(){
            slideoff();
            current=this.innerHTML-1;
            slideOn();
        }
    }
}
slideshow();