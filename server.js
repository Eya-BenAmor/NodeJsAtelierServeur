var http =require('http'); //librairie
//require -> importation library
var url =require('url');
var querystring=require('querystring');
var server =http.createServer(function(req,res){
    var page=url.parse(req.url).pathname;
    console.log(page);
    var params=querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type":"text/html"});
  //  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ma page node.js</title></head><body><p> Voici un paragraphe <strong>HTML</strong></p></body></html>')
  if(page == '/'){
res.write('vous etes dans la page d\'accueil ');

  }
  else if (page=='/Contact'){
    res.write('vous etes dans la page Contact ');
  }
  else if(page=='/Affichage/1/user'){
  
    if('id' in params && 'login' in params){
        res.write('votre id est ' +params['id']+ 'et votre login est ' +params['login']+ '\n');
        res.write('afficher l \' utilisateur qui a id 1 ');  
    }
    else {
        res.write('il faut entrer votre login et votre id pour accedez au affichage '); 
    }
  }
  else 
  {
    res.write('not found 404');
  }
    res.end();});
server.listen(5000,()=>{
  console.log("app is running on port 5000")
});
// Npm install -g nodemon // pour que le serveur sera automatiquement relancé