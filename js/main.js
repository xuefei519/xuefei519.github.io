$(function () {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); }
    );

$('.button').click(()=>{
    $('#contact').toggleClass('expand');
});

// const name = document.querySelector('#name .start');
// console.log(`letter  is ${name.getTotalLength()}`);
// // for(let i = 0; i<name.length;i++){
// //     console.log(`letter ${i+1} is ${name[i].getTotalLength()}`);
// // }
