
Test.setupForTesting();
Test.injectTestHelpers();
setResolver(Ember.DefaultResolver.create({ namespace: Test }));
Test.rootElement = '#ember-testing';

moduleForModel('vocabulary', 'Vocabulary Model');

test('testing sayGoodBye method', function() {
  var vocabulary = this.subject({ spaceone: 'jajaj' });
  Ember.run(function() {
    vocabulary.sayGoodBye();
  });
  equal(vocabulary.get('farewell'), 'It was a pleasure to be here, bye');
});