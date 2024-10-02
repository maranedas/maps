/*Display Menu*/
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu-index');

  // Maneja el clic en el botón hamburguesa
  menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('show');
      
  });
});


/* Abre el modal con la imagen clicada */
function openModal(image) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");
  
  modal.style.display = "block";
  modalImg.src = image.src;
}

/* Cierra el modal */
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

document.addEventListener('click', function (event) {
  const navMenu = document.getElementById("nav-menu-index");
  const menuToggle = document.getElementById("menu-toggle");

  // Asegúrate de que los elementos existan antes de interactuar con ellos
  if (!navMenu || !menuToggle) return;

  // Verifica si el clic fue dentro del menú o en el botón hamburguesa
  const isInsideMenu = navMenu.contains(event.target) || menuToggle.contains(event.target);

  if (!isInsideMenu) {
      navMenu.classList.remove('show');
      menuToggle.classList.remove('active');
  }
});



// Detectar el scroll y cambiar la clase del header
window.addEventListener('scroll', function() {
const header = document.querySelector('.header');
if (window.scrollY > 50) { // Cambia 50px o ajusta el valor según cuándo deseas que cambie
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});


let deferredPrompt;
const installButton = document.getElementById('install-button');

if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
  installButton.style.display = 'none';
}

// Escuchar el evento 'beforeinstallprompt', que se dispara cuando la PWA está lista para ser instalada
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir que la barra de instalación mínima aparezca automáticamente en dispositivos móviles
  e.preventDefault();
  // Guardar el evento para usarlo más tarde
  deferredPrompt = e;
  // Mostrar el botón de instalación en la interfaz de usuario
  installButton.style.display = 'block';

  // Añadir un evento click al botón de instalación
  installButton.addEventListener('click', () => {
    // Ocultar el botón de instalación
    installButton.style.display = 'none';
    // Mostrar el prompt de instalación
    deferredPrompt.prompt();
    // Esperar la respuesta del usuario
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('El usuario aceptó la instalación');
      } else {
        console.log('El usuario rechazó la instalación');
      }
      deferredPrompt = null; // Resetear deferredPrompt después de usarlo
    });
  });
});

// Escuchar el evento 'appinstalled', que se dispara cuando la PWA ha sido instalada
window.addEventListener('appinstalled', () => {
  console.log('La PWA fue instalada');
  // Ocultar el botón de instalación si la PWA ya está instalada
  installButton.style.display = 'none';
});




    if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/service-worker.js')  // Asegúrate de que el nombre del archivo sea correcto
  .then((registration) => {
    console.log('ServiceWorker registered with scope:', registration.scope);
  })
  .catch((error) => {
    console.error('ServiceWorker registration failed:', error);
  });
}
