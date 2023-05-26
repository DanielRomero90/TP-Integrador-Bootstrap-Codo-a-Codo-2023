const form = document.getElementById("form");
var resumen = false;
form.addEventListener("submit", validacion => {
    validacion.preventDefault();

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const cantidadEntradas = document.getElementById('cantidad').value;



    var valorEntrada = 200;
    var descEstudiante = 1 - 0.8;
    var descTrainee = 1 - 0.5;
    var descJunior = 1 - 0.15;
    var total = 0;

    if (name.value.trim() == '' || surname.value.trim() == '' || email.value.trim() == '') {
        alert("Completa todos los datos");
    } else if (!isValidEmail(email.value)) {
        alert('Ingrese un correo electrónico válido');
    }

    switch (document.getElementById('select').value) {
        case 'Estudiante':
            total = cantidadEntradas * (valorEntrada * descEstudiante);
            document.getElementById('precioTotal').value = "Total a pagar: $" + parseInt(total);
            document.getElementById('botonResumen').innerHTML = "Confirmar compra"
            break;
        case 'Trainee':
            total = cantidadEntradas * (valorEntrada * descTrainee);
            document.getElementById('precioTotal').value = "Total a pagar: $" + parseInt(total);
            document.getElementById('botonResumen').innerHTML = "Confirmar compra"
            break;
        case 'Junior':
            total = cantidadEntradas * (valorEntrada * descJunior);
            document.getElementById('precioTotal').value = "Total a pagar: $" + parseInt(total);
            document.getElementById('botonResumen').innerHTML = "Confirmar compra"
            break;
        default:
            break;
    }

    
});

 






function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

