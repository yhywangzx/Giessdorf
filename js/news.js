var timeOutId;//延迟时间
$(function() {
    //新闻导航
   $('.news:not(:first)').hide();//隐藏第一个的之外的div
    $('.news-nav .title-item').each(function(index){
        $(this).click(function() {
            timeOutId = setTimeout(function () {
                $('.news').hide();//隐藏所有的div
                $('.news').eq(index).show();
                $('.title-item').removeClass('list-select');//清除所有的select样式
                $('.title-item').eq(index).addClass('list-select');
            },300);
       }).mouseout(function(){
            clearTimeout(timeOutId);
        });
    })
});
