$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
   $(window).on('load scroll',function(){
       $('.fa-bars').removeClass('fa-times');
       $('.navbar').removeClass('nav-toggle');

       if($(window).scrollTop()>35)
       {
           $('.header').css({'background':'#e1dbdb','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
           $('.header .navbar ul li a').css({'color':'#3461c1'});
           $('.navbar ul li a:hover').css({'color':'#00bfff'});
       }
       else
       {
        $('.header').css({'background':'#FFF','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        $('.header .navbar ul li a').css({'color':'#3461c1'});
        $('.navbar ul li a:hover').css({'color':'#00bfff'});
       }
   });
});
