!function(a){
	"use strict";
 a(document).ready(function(){
 	function m(){
 	  l={lat:23.790546,lng:90.375583},
 	  j=new google.maps.Map(document.getElementById("map"),
 	   {center:l,zoom:16,scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0}),
 	  k=new google.maps.Marker({position:l,map:j,animation:google.maps.Animation.DROP,draggable:!0})}
 	   var b=a(window);
 	  a("[data-bg-path]").each(function(){
 	  	var b=a(this).data("bg-path");a(this).css("background-image","url("+b+")")});
 	    var c=a(".bg-video");c.length&&(c.tubular({videoId:c.data("bg-video"),mute:!0,repeat:!0}),
 	    	a("#tubular-player").css("height",b.outerHeight()),a("#tubular-container, #tubular-shield").appendTo(c));
 	    var d=a("#topNav, .openNav"),
 	        e=function(){b.scrollTop()>1?d.addClass("sticky"):d.removeClass("sticky")};e();
 	    var f=a("#backToTop"),
 	        g=a("#backToTop button"),
 	        h=function(){b.scrollTop()>1?f.addClass("show"):f.removeClass("show")};
 	        g.on("click",function(){
 	        	a("html, body").animate({scrollTop:0},500)}),
 	        b.on("scroll",function(){e(),h()}),
 	        a("#subscribeForm").length&&a("#subscribeForm").validate({rules:{EMAIL:{required:!0,email:!0}},
 	        	errorPlacement:function(a,b){return!0}}),
 	        a("#contactForm").length&&a("#contactForm").validate({rules:{contactName:"required",contactEmail:{required:!0,email:!0},contactSubject:"required",contactMessage:"required"},
 	        	errorPlacement:function(a,b){return!0},
 	        	submitHandler:function(){a(
 	        		".contact-form-status").show().html('<div class="alert alert-success"  role="alert">Thanks! Your message has been sent.</div>').delay(1e3).fadeOut("slow")}});var i=a("#postCommentForm");i.length&&i.validate({rules:{commenterName:"required",commenterComments:"required",commenterEmail:{required:!0,email:!0}},errorPlacement:function(a,b){return!0}});
 	    var j,k,l;
 	    a("#map").length&&m(),
 	    a(".map-toggle-btn").on("click",function(){var b=a(this);b.toggleClass("opened")});
 	    var n=a("#tweets");
 	    if(n.length){var o={id:n.data("twitter-id"),domId:"tweets",maxTweets:1,showTime:!1,showUser:!1,showInteraction:!1};twitterFetcher.fetch(o)}
 	    var p=a("#tweets2");
 	    if(p.length){var q={id:n.data("twitter-id"),domId:"tweets2",maxTweets:3,showTime:!1,showUser:!1,showInteraction:!1};twitterFetcher.fetch(q)}
 	    c.length&&a("#bgVideo .play-button").magnificPopup({delegate:"a",type:"iframe",mainClass:"my-mfp-zoom-in"}),
 	    a(".portfolio-items").length&&(a(".portfolio-img-link").magnificPopup({type:"image",gallery:{enabled:!0},mainClass:"my-mfp-zoom-in"}),
 	    	a(".portfolio-details-link").magnificPopup({type:"ajax",mainClass:"my-mfp-zoom-in",callbacks:{ajaxContentAdded:function(){componentHandler.upgradeAllRegistered()}}})),
 	    a(".facts-number").length&&a(".facts-number").counterUp({delay:10,time:1e3}),a(".animatescroll > li > a").on("click",function(b){b.preventDefault();var c=a(this).attr("href");a(c).animatescroll({padding:70,easing:"easeInOutExpo",scrollSpeed:1e3})});
 	    var r=a(".color-switcher");r.length&&(a("#open-switcher").on("click",function(){a("#open-switcher").css("display","none"),a("#demo-colors").animate({right:"0px"},200,"linear",function(){a("#close-switcher").fadeIn(200)})}),a("#close-switcher").on("click",function(){a("#close-switcher").css("display","none"),a("#demo-colors").animate({right:"-202px"},200,"linear",function(){a("#open-switcher").fadeIn(200)})}),a("#buttonColors li").on("click",function(){a("#buttonColorScheme").attr("href",a(this).attr("data-path")),a(this).addClass("active").siblings().removeClass("active")}),a("#mainColors li").on("click",function(){a("#mainColorScheme").attr("href",a(this).attr("data-path")),a(this).addClass("active").siblings().removeClass("active")}))}),a(window).load(function(){var b=a(".header-items"),c=a(".team-items"),d=a(".feedback-items");b.length&&b.owlCarousel({itemsSelector:".header-item",slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0,addClassActive:!0}),c.length&&c.owlCarousel({itemsSelector:".team-item",slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0,pagination:!0}),d.length&&d.owlCarousel({slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0,pagination:!0});var e="64801217";a.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id="+e+"@N07&lang=en-us&format=json&jsoncallback=?",function(b){a.each(b.items,function(b,c){9>=b&&a("<img/>").attr("src",c.media.m.replace("_m","_s")).appendTo(".FlickrImages ul").wrap("<li><a href='"+c.link+"'target='_blank' title='"+c.title+"' alt='"+c.alt+"'></a></li>")})});var f=a(".portfolio-items"),g=a(".portfolio-filter-menu ul");f.length&&(f.isotope({itemSelector:".portfolio-item",layoutMode:"packery"}),g.on("click",function(b){if(a(b.target).is("li")){var d,c=a(b.target).data("filter");d="*"!==c?"."+c:c,f.isotope({filter:d}),a(b.target).siblings().removeClass("active"),a(b.target).addClass("active")}})),a("#preloader").fadeOut("slow")})}(jQuery);