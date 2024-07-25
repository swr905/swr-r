//获取ul元素，追加一组图片，使其无缝衔接
let ul=document.querySelector('.slideimg ul');
ul.innerHTML=ul.innerHTML+ul.innerHTML;
//获取所有li元素
let lis=document.querySelectorAll('.slideimg li');
//每次滚动的跨度，默认为向左
let spa=-2;
//计算并设置ul的总宽度
ul.style.width=lis[0].offsetWidth*lis.length+'px';
//滚动函数
function move(){
    if(ul.offsetLeft<-ul.offsetWidth/2){
        ul.style.left='0';
    }
    ul.style.left=ul.offsetLeft+spa+'px';
}
//定时器
let timer=setInterval(move,150);
//为ul绑定事件，悬停停止，移开滚动
ul.addEventListener('mousemove',function(){
    clearInterval(timer);
})
ul.addEventListener('mouseout',function(){
    timer=setInterval(move,150);
})