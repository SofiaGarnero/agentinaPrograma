//console.log("enlasado?")
const aSuscripcion = document.getElementById('botonCorreo');
const btnContacto = document.getElementById('botonFormulario');

aSuscripcion.addEventListener('click', () => {

    const nombre1 = document.getElementById("nombre1").value
    const email1 = document.getElementById("email1").value

    if (nombre1 === '') {
        alert('Ingresa el nombre!')
        return
    }

    if (email1 === '') {
        alert('Ingresa el email!')
        return
    }

    alert('Gracias!');
})

btnContacto.addEventListener('click', () => {
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const mascota = document.getElementById("idMascota").value
    const mensaje = document.getElementById("mensaje").value

    if (nombre === '') {
        alert('Ingresa el nombre!')
        return
    }

    if (email === '') {
        alert('Ingresa el email!')
        return
    }

    if (telefono === '') {
        alert('Ingresa el telefono!')
        return
    }

    if (mensaje === '') {
        alert('Ingresa el mensaje!')
        return
    }

    // Crea un nuevo objeto jsPDF
    const pdf = new jsPDF();

    // Agrega el contenido al PDF
    pdf.text(20, 20, "FORMULARIO DE ADOPCIÒN");
    pdf.text(20, 30, "Nombre: " + nombre);
    pdf.text(20, 40, "Email: " + email);
    pdf.text(20, 50, "Telefono: " + telefono);
    pdf.text(20, 60, "mascota: " + mascota);
    pdf.text(20, 70, "Mensaje: " + mensaje);

    pdf.text(20, 80, `El señor/a ${nombre} completo el formulario de adopción de ${mascota}`);

    // Guarda el PDF como un archivo
    pdf.save("formulario1.pdf");

    alert('Su formulario se cargo con exito');

})