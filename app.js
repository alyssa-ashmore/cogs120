
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


var index = require('./routes/index');
// var fs = require('fs');
// console.log(fs);
// var data = fs.readFileSync('./entry.json');
// var entry = data.toString('utf8');
// console.log(entry);


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars( {
 partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
// app.use(fs);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./images'));
app.use(express.static('./public/js'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/homepage', index.homepage);
app.get('/pastentries', index.postentry);
app.get('/profile', index.profile);
app.get('/newentry',index.newentry);
app.get('/tagspage',index.tagspage);
app.get('/tagentries',index.tagentries);
app.get('/entrycontent',index.viewentry);
app.get('/oldentrycontent', index.viewold);
app.get('/prompt1',index.prompt1);
app.get('/prompt2',index.prompt2);

app.get('/b', index.bview);
app.get('/bhomepage', index.bhomepage);
app.get('/bpastentries', index.bpostentry);
app.get('/bprofile', index.bprofile);
app.get('/bnewentry',index.bnewentry);
app.get('/btagspage',index.btagspage);
app.get('/btagentries',index.btagentries);
app.get('/bentrycontent',index.bviewentry);
app.get('/boldentrycontent', index.bviewold);
app.get('/bprompt1',index.bprompt1);
app.get('/bprompt2',index.bprompt2);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
