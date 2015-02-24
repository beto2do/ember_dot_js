
Test.Vocabulary = DS.Model.extend({
  spaceone: DS.attr('string'),
  spacetwo: DS.attr('string'),
  spacethree: DS.attr('string'),
  spacefour: DS.attr('string'),
  spacefive: DS.attr('string'),
  spacesix: DS.attr('string'),
  spaceseven: DS.attr('string'),
  spaceeight: DS.attr('string')
});

Test.Vocabulary.reopenClass({
  FIXTURES: [
 {
  id: 1,
  spaceone: 'in',
  spacetwo: 'gifted',
  spacethree: 'hopeless',
  spacefour: 'skilful',
  spacefive: 'of talented',
  spacesix: 'aptitude for',
  spaceseven: 'expert',
  spaceeight: 'talented'
 },
 {
  id: 2,
  spaceone: 'Lorem Ipsum One',
  spacetwo: 'Lorem Ipsum Two',
  spacethree: 'Lorem Ipsum Three',
  spacefour: 'Lorem Ipsum Four',
  spacefive: 'Lorem Ipsum Five',
  spacesix: 'Lorem Ipsum Six',
  spaceseven: 'Lorem Ipsum Seven',
  spaceeight: 'Lorem Ipsum Eight'
 }
  ]
});