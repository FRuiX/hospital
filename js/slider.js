($(function(){
    var slider = {
    	box : $('.banner-slider'),
    	wrap : $('.slider-wrap'),
    	img : $('.slider-img '),
    	process : $('.slider-process'),
    	processImg : $('.slider-process-img'),
    	pre : $('.slider-pre'),
    	next : $('.slider-next')
    }
    var width = slider.img.eq(0).width();
    var index = 0;
    var size = slider.img.size();
    var enableAuto = true;
    //标识符
    slider.box.on('mouseout',function(){
    	enableAuto = true;
    });
    slider.box.on('mouseover',function(){
    	enableAuto = false;
    })
    // 判断是否执行自动轮播
    setInterval(function(){
    	if(enableAuto){
    		moveNext()
    	}
    },1000)
    // 绑定点击事件
    	//1. 下一张按钮
    slider.next.on('click',moveNext);
    	//2.上一张按钮
    slider.pre.on('click',movePre);
    	//通过item点击切换
    slider.processImg.on('click',function(){
    	index = $(this).index()
    	moveTo()
    })
    // 切换图片
    function moveTo(){
    	slider.wrap.animate({
    		left : width*index*-1
    	 });
    	slider.processImg.removeClass('active').eq(index).addClass('active')
    }
    // 切换到下一张
    function moveNext(){
    	if(index >= size-1){
    		index = -1
    	}
    	index++;
    	moveTo();  	
    }
    // 切换到上一张
    function movePre(){
    	if(index <= 0){
    		index = size
    	}
    	index = index-1;
    	moveTo();  	
    }
}))