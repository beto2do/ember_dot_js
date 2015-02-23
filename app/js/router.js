Test.Router.map(function() {
  this.resource('test', { path: '/' },function(){
  	this.route('vocabulary');
  });
});

Test.TestVocabularyRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('vocabulary',1);
  },
	setupController: function(controller, model) {
		this._super(controller, model);
    controller.set('model', model);
  }
});