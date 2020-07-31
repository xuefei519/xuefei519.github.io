$(function () {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); }
    );

$('.button').click(()=>{
    $('#contact').toggleClass('expand');
});