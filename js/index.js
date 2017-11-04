//加盟
$(function(){
	var nav=$(".main"); //
	var win=$(window); //得到窗口对象
	var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>= 550){
            $(".store").show(); 
        }else{
            $(".store").hide();
        }
    }) 
    win.scroll(function(){
        if(sc.scrollTop()>=1440){
            $(".news").show(); 
        }else{
            $(".news").hide();
        }
    })    
});