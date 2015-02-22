Test.Router.map(function() {
  this.resource('test', { path: '/' },function(){
  	this.route('vocabulary');
  });
});