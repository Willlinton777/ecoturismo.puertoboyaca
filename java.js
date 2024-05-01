

function enviarFormulario() {


  //validar que todos los campos no esten vacios si no estan vacios mostrar confirmacion 
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre == "" || correo == "" || mensaje == "") {
    alert("Por favor llene todos los campos");
    return;
  } else {
    alert("Mensaje enviado con exito");
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mensaje').value = '';
    return
  }
}

