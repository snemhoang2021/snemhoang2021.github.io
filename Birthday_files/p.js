function stepfinal(){jQuery("#p_body_content").fadeOut("slow");jQuery("#p_loading").fadeIn("slow");}
function goToUrlFinish(){stepfinal();PreventExitPop=false;document.getElementById("p_form_post").submit();}
function scrollTo(a){if($("#"+a).length){var c=$("#"+a).offset();var b=c.top;$("html,body").animate({scrollTop:b},{duration:"slow"});}}
function getBrowser(){if((navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))!=-1){return "Opera";}else{if(navigator.userAgent.indexOf("Chrome")!=-1){return "Google Chrome";}else{if(navigator.userAgent.indexOf("Safari")!=-1){return "Safari";}else{if(navigator.userAgent.indexOf("Firefox")!=-1){return "Firefox";}else{if((navigator.userAgent.indexOf("MSIE")!=-1)||(!!document.documentMode==true)){return "IE";}else{return "Unknown";}}}}}
return "Unknown";}
function getPlatform(){if(window.navigator.userAgent.indexOf("Windows NT 10.0")!=-1){return "Windows 10";}
if(window.navigator.userAgent.indexOf("Windows NT 6.2")!=-1){return "Windows 8";}
if(window.navigator.userAgent.indexOf("Windows NT 6.1")!=-1){return "Windows 7";}
if(window.navigator.userAgent.indexOf("Windows NT 6.0")!=-1){return "Windows Vista";}
if(window.navigator.userAgent.indexOf("Windows NT 5.1")!=-1){return "Windows XP";}
if(window.navigator.userAgent.indexOf("Windows NT 5.0")!=-1){return "Windows 2000";}
if(window.navigator.userAgent.indexOf("iPhone")!=-1){return "iPhone";}
if(window.navigator.userAgent.indexOf("iPad")!=-1){return "iPad";}
if(window.navigator.userAgent.indexOf("Android")!=-1){return "Android";}
if(window.navigator.userAgent.indexOf("Mac")!=-1){return "Macintosh";}
if(window.navigator.userAgent.indexOf("X11")!=-1){return "UNIX";}
if(window.navigator.userAgent.indexOf("Linux")!=-1){return "Linux";}
if(window.navigator.userAgent.indexOf("BlackBerry")!=-1){return "BlackBerry";}
return "Unknown";}
jQuery(document).ready(function(){function d(h){var j,k,i=h,g=setInterval(function(){j=parseInt(i/60,10),k=parseInt(i%60,10),k=10>k?"0"+k:k,$("#timerr").text(j+" "+minutos_y+k+" "+segundos),--i<0&&(clearInterval(g));},1000);}
if(jQuery("#timerr").length>=1){d((4*60)+29);}
function f(g){if(g<10){g="0"+g;}return g;}
var b=new Date();var a=f(b.getHours())+":"+f(b.getMinutes());jQuery(".p_var-dia").text(b.getDate());jQuery(".p_var-mes").text(b.getMonth());jQuery(".p_var-anyo").text(b.getFullYear());jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);jQuery(".p_var-hora_fija").text(a);if(jQuery(".p_var-browser").length>=1){var c=getBrowser();jQuery(".p_var-browser").text(c);}
if(jQuery(".p_var-browser").length>=1){var e=getPlatform();jQuery(".p_var-so").text(e);}});$(document).ready(function(){$(".bq1").click(function(){$("#q1").fadeOut("slow",function(){$("#q2").fadeIn("slow")})}),$(".bq2").click(function(){$("#q2").fadeOut("slow",function(){$("#q3").fadeIn("slow")})}),$(".bq3").click(function(){$("#q3").fadeOut("slow",function(){$("#q4").fadeIn("slow")})}),$(".bq4").click(function(){scrollTo("id1"),$("#content1").fadeOut("slow",function(){$('html,body').animate({ scrollTop: 0 }, 100);$("#content2").fadeIn(),setTimeout(function(){$("#result1").fadeIn(1e3)},3e3),setTimeout(function(){$("#result2").fadeIn(1e3)},4100),setTimeout(function(){$("#result3").fadeIn(1e3)},6e3),setTimeout(function(){$("#content2").fadeOut("slow",function(){"undefined"!=typeof roulette_ini?rouletteRoot._init():"undefined"!=typeof box_ini&&boxRoot._init(),$("#content3").fadeIn()})},7100)})})});var count=1;var intentos=3;var puedo=false;var boxRoot;
                		var datetime = [[datetime]];(function(){"use strict";boxRoot={_init:function(){setTimeout(function(){jQuery('#p_modal1').modal(modalOptions);},1000);jQuery('.try').on('click',function(){if(puedo&&count<=intentos){if(jQuery(this).hasClass('abierta')){}else{puedo=false;jQuery('.circle-loader').removeClass("load-complete");jQuery('.checkmark').css("display","none");jQuery(this).addClass('abierta');if(count==2){jQuery(this).addClass('premiazo');setTimeout(function(){jQuery(".div_img_gift, .img_gift").fadeIn("slow",function(){setTimeout(function(){jQuery('#p_modal3').modal(modalOptions);jQuery('.circle-loader').addClass("load-complete");jQuery('.checkmark').css("display","block");},1500);});},4000);}
else{count++;intentos--;jQuery('#num_intentos').html(intentos);setTimeout(function(){jQuery('#p_modal2').modal(modalOptions);setTimeout(function(){jQuery('.circle-loader').addClass("load-complete");jQuery('.checkmark').css("display","block");puedo=true;},1000);},2000);}}}});jQuery("#p_modal_button1").on("click",function(event){event.stopPropagation();jQuery('#p_modal1').modal('hide');
										$('html,body').animate({ scrollTop: 0 }, 100);puedo=true;});jQuery("#p_modal_button2").on("click",function(event){event.stopPropagation();jQuery('#p_modal2').modal('hide');});}};jQuery(document).ready(function(){if(typeof box_ini=="undefined"){boxRoot._init();}});})();