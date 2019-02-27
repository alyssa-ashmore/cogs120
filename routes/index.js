

exports.view = function(req, res){
  res.render('index');
};

exports.homepage = function(req, res){
  res.render('HomePage');
};

var entry = require('../entry.json');

exports.postentry = function(req, res){
	console.log(entry);
	res.render('PastEntries', entry);
};

exports.profile = function(req, res){
	res.render('ProfilePage');
};

// var fs = require('fs');

exports.newentry = function(req, res){
	res.render('NewEntry');
};

exports.tagspage = function(req, res){
	res.render('TagsPage', entry);
};

exports.tagentries = function(req, res){
	res.render('TagEntries');
};

exports.viewentry = function(req, res){
	res.render('EntryContent');
};

exports.viewold = function(req, res){
	res.render('OldEntryContent');
};


exports.prompt1 = function(req, res){
	res.render('prompt1');
};

exports.prompt2 = function(req, res){
	res.render('prompt2');
};


exports.bview = function(req, res){
	res.render('bindex');
};

exports.bhomepage = function(req, res){
  res.render('bHomePage');
};

exports.bpostentry = function(req, res){
	console.log(entry);
	res.render('bPastEntries', entry);
};

exports.bprofile = function(req, res){
	res.render('bProfilePage');
};


exports.bnewentry = function(req, res){
	res.render('bNewEntry');
};

exports.btagspage = function(req, res){
	res.render('bTagsPage', entry);
};

exports.btagentries = function(req, res){
	res.render('bTagEntries');
};

exports.bviewentry = function(req, res){
	res.render('bEntryContent');
};

exports.bviewold = function(req, res){
	res.render('bOldEntryContent');
};


exports.bprompt1 = function(req, res){
	res.render('bprompt1');
};

exports.bprompt2 = function(req, res){
	res.render('bprompt2');
};
