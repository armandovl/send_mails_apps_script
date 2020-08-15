// aaaaaaaaaaaaaaaaaaaaaaaaaaa
/*********ejemplo 1 envio de correo***********/
function enviarCorreo(){

  var fecha = new Date();
  
  GmailApp.sendEmail("correo.destino@gmail.com", "asunto"+fecha, "Contenido del correo"+ fecha);
  
  //para mas de un correo GmailApp.sendEmail([email,'rvaldes@nuvartic.com'], "Asunto del correo", mensaje + mensaje2 );
   
} 

/*********ejemplo 2 envio de correo***********/

function enviarCorreoHtml(){
  
  //MailApp tiene menos funciones que GmailApp

  var cuerpoHtml = '<h1 style="color:#66cc00">Titulo</h1>'+
  '<p><i>Soy un parrafo</i></p>'+
    '<img src="https://kissflow.com/wp-content/uploads/2016/08/google-apps-script.jpg">';
  
  // al final va el html
  MailApp.sendEmail("correo.destino@gmail.com", "Asunto del correo", "contenido",{
    htmlBody:cuerpoHtml
  })
  
}

/*********ejemplo 3 envio de correo***********/
function enviarCorreo3(){
 
  // se pueden agregar varias variables como mensaje
  // el símbolo \n sirve para hacer un dalto de linea
    var mensaje="Estimado amigo Hacemos uso de este medio para hacerte llegar la información sobre la nueva plataforma";
    var mensaje2= "\n"+ "Como parte de las acciones que la Dirección General de Instrumentación";
    var mensaje3= "\n"+ "para ingresar visita:   " + "http://sembrando-vida.com/seguimiento/";
    var mensaje4= "\n Usuario:  "+ "user1" + "\n aula:  "+ "aula 32";
    var mensaje5= "\n NO RESPONDER A ESTE CORREO, para cualquier duda aclaracion escribir a sembrado.vidapsv@gmail.com"
    GmailApp.sendEmail("email", "Alta CAD Sembrando Vida", mensaje + mensaje2 + mensaje3 + mensaje4 + mensaje5);

}