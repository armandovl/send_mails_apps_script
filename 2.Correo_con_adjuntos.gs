function enviarCorreoAdjuntos() {
  
  //primero se obtienen los archivos adjuntos por medio de su id
  // no importa si estan o no compartidos
  
  var archivo1 = DriveApp.getFileById("18Uw5WRTVUMinxZX1LKUFK7EA0QgtyMbjNFHQEZL3Ixw");/*compartido*/
  var archivo2=  DriveApp.getFileById("1vTL5vMIw7a5FkxmbdMBQNhhBHg9N5deJqSzkls2IZEw"); /*no compartido*/
  
  // asi se adjuntan los archivos ..separados por una coma {attachments:[archivo1,archivo2]}
  
   GmailApp.sendEmail("email_receptor@gmail.com", "Asunto", "mensaje", {attachments:[archivo1,archivo2]});
  
  
}
