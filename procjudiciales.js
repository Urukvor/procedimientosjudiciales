
/*============================================|
|       Efectos de tabla view_1706 y 1823     |
|============================================*/

// Efecto de filas en ambas tablas
function efectoTabla(viewId) {
  $('#' + viewId + ' tbody tr').each(function(index) {
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
}

// Ejecutar efecto de tabla al renderizar cada vista
$(document).on('knack-view-render.view_1706', function() {
  efectoTabla('view_1706');
});

$(document).on('knack-view-render.view_1823', function() {
  efectoTabla('view_1823');
});


/*============================================|
|       Efecto de aparición de vistas         |
|============================================*/

// Función reutilizable para ambas vistas
function cargarVista(viewId) {
  const view = $('#' + viewId);

  // Si todavía no existe, salir
  if (!view.length) return;

  // Efecto de aparición
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
  }, 50);
}


// Evento de renderizado view_1706
$(document).on('knack-view-render.view_1706', function() {
  cargarVista('view_1706');
});

// Evento de renderizado view_1823
$(document).on('knack-view-render.view_1823', function() {
  cargarVista('view_1823');
});


// Si el script carga después de las vistas
$(function() {
  cargarVista('view_1706');
  cargarVista('view_1823');
});
