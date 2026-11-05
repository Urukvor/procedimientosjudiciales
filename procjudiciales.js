//efectoTabla view_1706
$(document).on('knack-view-render.view_1706', function() {
  $('#view_1706 tbody tr').each(function(index) {
    $(this)
      .css({
        opacity: 0,
        transform: 'translateY(15px)'
      })
      .delay(index * 50)
      .animate({
        opacity: 1
      }, 300);
    
    setTimeout(() => {

      $(this).css({
        transform: 'translateY(0)',
        transition: 'all 0.3s ease'
      });
    }, index * 50);
  });
});

//view_1706
function cargarView1706() {
  const view = $('#view_1706');
  //si todavía no existe, salir
  if (!view.length) return;
  // efecto formulario
  view
    .css({
      opacity: 0,
      transform: 'translateY(20px)'
    })
    .animate({
      opacity: 1
    }, 400);

  setTimeout(function() {

    view.css({
      transform: 'translateY(0)',
      transition: 'all .4s ease'
    });
  },50);
}

//eventoNormalKnack
$(document).on('knack-view-render.view_1706', function() {
  cargarView4147();
});
//siElScriptCargoDespués
$(function(){
  cargarView4147();
});
