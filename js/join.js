var timeOutId;//延迟时间
$(function() {
    //加盟
   $('.good-list-right:not(:first)').hide();//隐藏第一个的之外的div
    $('.good-list-left .title-item').each(function(index){
        $(this).click(function() {
            timeOutId = setTimeout(function () {
                $('.good-list-right').hide();//隐藏所有的div
                $('.good-list-right').eq(index).show();
                $('.title-item').removeClass('list-select');//清除所有的select样式
                $('.title-item').eq(index).addClass('list-select');
            });
       }).mouseout(function(){
            clearTimeout(timeOutId);
        });
    })
});
//加盟
$(function(){
	var nav=$(".jion"); 
	var win=$(window); 
	var sc=$(document);
	win.scroll(function(){
        if(sc.scrollTop()>=300){
            $(".jion-flow").show(); 
        }else{
            $(".jion-flow").hide();
        }
    }) 
    win.scroll(function(){
        if(sc.scrollTop()>=800){
            $(".jion-good").show(); 
        }else{
            $(".jion-good").hide();
        }
    })   
});
