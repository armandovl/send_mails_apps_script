
/*************** Crear Borradores *****************/
function crearBorrador(){

  var fecha = new Date();
  
  GmailApp.createDraft("correo.destino@gmail.com", "asunto1", "contenido1>"+fecha);
  GmailApp.createDraft("correo.destino@gmail.com", "asunto2", "contenido2>"+fecha);
  GmailApp.createDraft("correo.destino@gmail.com", "asunto3", "contenido3>"+fecha);
  
}

/*************** Crear Borradores con html *****************/
function borradorHtml(){

  var cuerpoHtml = '<h1 style="color:#66cc00">Titulo</h1>'+
  '<p><i>Soy un parrafo</i></p>'+
    '<img src="https://kissflow.com/wp-content/uploads/2016/08/google-apps-script.jpg">';
  
  GmailApp.createDraft("correo.destino@gmail.com", "borrador con HTML", "",{
    htmlBody:cuerpoHtml
  })
  
}

/*************** Enviar Borradores *****************/

function enviarBorradores(){

  var borradores = GmailApp.getDrafts();
  
  var borrador1 = borradores[0];
  
    borrador1.send();
  }

/*************** Enviar Borradores cumplen una condicion *****************/

function enviarBorradoresCondicion(){
  
  var borradores = GmailApp.getDrafts(); // traemos todos los borradores que hay, en forma de array
  
  for (var i = 0; i<borradores.length; i++){ //ciclo for desde 0 hasta la todos los borradores
    var borradorNumero = borradores[i]; //hacemos la variable que recorrera todo el array
    if (borradorNumero.getMessage().getSubject()=="asunto12"){ //si la variable cuenta con el asunto "asunto2"
      borradores[i].send(); //entonces enviar el borrador
    }
  }
}


