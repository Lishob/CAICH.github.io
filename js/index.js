$(document).ready(function(){
    $('a[href="#servicios"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#servicios").offset().top
        }, 1000);
    });

    $('a[href="#contacto"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
        }, 1000);
    });

    $('a[href="#departamento"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#departamento").offset().top
        }, 1000);
    });
});
