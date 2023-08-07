const loginValation = document.querySelector('[data-login]').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    const usuarioValido = 'admin@gmail.com';
    const contraseñaValida = 'admin123';

    if (email == usuarioValido && password == contraseñaValida) {
        return window.location.href = './products.html'; // Redirigir al usuario a la página de productos
    }
    else {
        alert('Correo o contraseña incorrectos.');
    }
});