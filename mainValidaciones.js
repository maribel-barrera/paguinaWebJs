
//aplicar validaciones al formulario enviado  
function aplicarValidaciones() {

    //variables del formulario
    var cliente = document.getElementById("inputNombre").value == null ? "" : 
        document.getElementById("inputNombre").value;
    var numLic = document.getElementById("inputNumLicence").value == null ? "" : 
        document.getElementById("inputNumLicence").value;
    var email  = document.getElementById("inputEmail").value == null ? "" : 
        document.getElementById("inputEmail").value;
    var telefono = document.getElementById("inputTel").value == null ? "" : 
        document.getElementById("inputTel").value;
    var modulosSelected = document.getElementsByName("moduls").value == null ? "" : 
        document.getElementsByName("moduls").value;
    var error = 0;

    //valores default 
    var precioLicencia = 900;
    var importe = precioLicencia * numLic;
    var fechaCot = new Date();
    var folio = Math.floor(Math.random() * 100);

    if (!validarCamposRequeridos(cliente)) {
        error++;
        alert("El campo nombre no puede estar vacio.");
    }

    if (!validarCamposRequeridos(email)) {
        error++;
        alert("El campo mail no puede estar vacio.");
    }

    if (!validarNumEntero(numLic)) {
        error++;
        alert('El num de licencias es incorrecto.');
    }

    if (!validarEmail(email)) {
        error++;
        alert('El campo email es incorrecto.');
    }

    //Sin errores, mostrar paguina 2    
    if(error==0){
        window.locationf="procesarCotizacion.html";
    }
}      


function validarCamposRequeridos(valor){
    if(valor!=null && valor.lenght == 0 ){
        return false;
    }else{
        return true;
    }
}  

function validarNumEntero(valor){
    if(valor!=null && valor < 0){
       return false;
    }else{
       return true;
    }
}

function validarEmail(valor){
    var patter = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
    if(valor!=null && valor.includes("@")){
       return false;
    }else{
       return true;
    }
}

function validarTelefono(valor){
    //eliminar caracteres - 
    if (valor!=null){
        var justNums = valor.trim().replace("-","");

        //validar solo 10 digitos.
        if (valor!=null && justNums.length <= 12) {
           return true;
        }
    }
}

function enviarCorreo(){
    var to = this.email;
    var subject = "Nueva Cotización";
    var message = "Saludos  Hacemos llegar su cotización.";
    var from = "cotizaciones@ejemplo.com";
    var headers = "From: " . from;
    mail(to, subject, message, headers);
    alert("Correo Enviado!!");
}




