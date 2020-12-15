$('.medicamentos').click(function(){
    $('#menuLateral ul .itensMedicamentos').toggleClass('mostrar');
});
$('.vitamina').click(function(){
    $('#menuLateral ul .itensVitaminas').toggleClass('mostrar');
});
$('.cuidados').click(function(){
    $('#menuLateral ul .itensCuidados').toggleClass('mostrar');
});
$('.fitness').click(function(){
    $('#menuLateral ul .itensFitness ').toggleClass('mostrar');
});

$('.btnAbre').click(function(){
    $(' #menuLateral').toggleClass('mostrar');
});
$('.btnFecha').click(function(){
    $(' #menuLateral').toggleClass('mostrar');
});
$('.medicamentos').mouseover(function(){
    $('#menuLateral ul .seta1').toggleClass('girar')
});
$('.medicamentos').mouseout(function(){
    $('#menuLateral ul .seta1').toggleClass('girar')
});
$('.vitamina').mouseover(function(){
    $('#menuLateral ul .seta2').toggleClass('girar')
});
$('.vitamina').mouseout(function(){
    $('#menuLateral ul .seta2').toggleClass('girar')
});
$('.cuidados').mouseover(function(){
    $('#menuLateral ul .seta3').toggleClass('girar')
});
$('.cuidados').mouseout(function(){
    $('#menuLateral ul .seta3').toggleClass('girar')
});
$('.fitness').mouseover(function(){
    $('#menuLateral ul .seta4').toggleClass('girar')
});
$('.fitness').mouseout(function(){
    $('#menuLateral ul .seta4').toggleClass('girar')
});

