function copiaYCopiaOculta() {
  
  var archivo1 = DriveApp.getFileById("1qBDpWRx3VvFaiyZwuz9SmXm3a8ZuhoWLX1gTRzYoG0s");/*no compartido*/
  var mensaje="hola ";
  var mensaje2="Armando";
  
  MailApp.sendEmail({
      to: "valdes.gam@gmail.com",
      subject: "Asunto",
      body: mensaje + mensaje2,
      bcc:'icaepp.contacto@gmail.com',
      cc:'arma.v16@gmail.com',
      attachments: [archivo1]
    
    })
  
}

// mas de un correo

function copiaYCopiaOculta2() {
  
  var mensaje="hola ";
  var mensaje2="Armando";
  
  MailApp.sendEmail({
      to: "valdes.gam@gmail.com,icaepp.contacto@gmail.com",
      subject: "correos con copia",
      body: mensaje + mensaje2,
      bcc:'valdes797@hotmail.com,vala797@yahoo.com.mx',
      cc:'arma.v16@gmail.com',
    
    })
  
}

