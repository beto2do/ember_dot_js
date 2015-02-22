Test.Router.map(function() {
  this.resource('test', { path: '/' },function(){
  	this.route('vocabulary');
  });
});

Test.TestVocabularyRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('vocabulary',1);
  }
});