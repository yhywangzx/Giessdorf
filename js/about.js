//关于我们
$(function(){
	var nav=$(".about"); //
	var win=$(window); //得到窗口对象
	var sc=$(document);//得到document文档对象。
	win.scroll(function(){
        if(sc.scrollTop()>=200){
            $(".about-board").show(); 
        }else{
            $(".about-board").hide();
        }
    }) 
    win.scroll(function(){
        if(sc.scrollTop()>=800){
            $(".about-content").show(); 
        }else{
            $(".about-content").hide();
        }
    })   
});