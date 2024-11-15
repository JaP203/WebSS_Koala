// Pantalla de carga
window.addEventListener('load', function () {
    const pantallaCarga = document.getElementById('pantalla-carga');
    setTimeout(() => {
      pantallaCarga.style.opacity = '0'; // Iniciar desvanecimiento
      setTimeout(() => {
        pantallaCarga.style.display = 'none'; // Ocultar pantalla de carga
      }, 1000); // Duración del desvanecimiento
    }, 5000); // Tiempo de carga de 5 segundos
  });
  
  // Botón flotante para entradas
  const boton = document.getElementById('boton-flotante');
  const contenedor = document.getElementById('contenedor-imagenes');
  let animacionActiva = false;
  
  boton.addEventListener('click', () => {
    if (!animacionActiva) {
      contenedor.classList.add('mostrar');
      boton.textContent = 'Volver';
      animacionActiva = true;
    } else {
      contenedor.classList.remove('mostrar');
      boton.textContent = 'Mira nuestras entradas';
      animacionActiva = false;
    }
  });
  
  // Actualización de resumen de compra
  function calcularResumen(lado, precio) {
    const cantidad = document.querySelector(`.${lado} input[name="cantidad"]`).value || 0;
    const subtotal = cantidad * precio;
    const iva = subtotal * 0.21;
    const total = subtotal + iva;
  
    document.getElementById(`subtotal-${lado}`).textContent = `${subtotal}€`;
    document.getElementById(`iva-${lado}`).textContent = `${iva.toFixed(2)}€`;
    document.getElementById(`total-${lado}`).textContent = `${total.toFixed(2)}€`;
  }
  
  // Escuchar cambios en las cantidades de entradas (Lado Izquierdo - Entrada de 10€)
  document.querySelector('.izquierdo input[name="cantidad"]').addEventListener('input', function () {
    calcularResumen('izquierdo', 10);
  });
  
  // Escuchar cambios en las cantidades de entradas (Lado Derecho - Entrada de 25€)
  document.querySelector('.derecho input[name="cantidad"]').addEventListener('input', function () {
    calcularResumen('derecho', 25);
  });
  
  // Aplicar descuento
  document.querySelectorAll('[id^="aplicar-descuento"]').forEach((boton) => {
    boton.addEventListener('click', function () {
      const descuentoId = this.id.split('-')[2];
      const codigo = document.getElementById(`descuento-${descuentoId}`).value;
  
      if (codigo === 'DESCUENTO10') {
        alert('10% de descuento aplicado');
      } else {
        alert('Código de descuento no válido');
      }
    });
  });
  
  // Expansión de tarjetas de eventos
  document.querySelectorAll('.tarjeta-evento').forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      const eventoId = tarjeta.dataset.evento;
      const tituloEvento = tarjeta.querySelector('h3').textContent;
      const descripcionEvento = tarjeta.querySelector('p').textContent;
  
      document.getElementById('titulo-evento').textContent = tituloEvento;
      document.getElementById('descripcion-evento').textContent = descripcionEvento;
  
      const modal = document.getElementById('evento-expandido');
      modal.classList.add('mostrar');
    });
  });
  
  // Cerrar vista expandida del evento
  document.getElementById('cerrar-evento').addEventListener('click', () => {
    document.getElementById('evento-expandido').classList.remove('mostrar');
  });
  