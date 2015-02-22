
Test.Vocabulary = DS.Model.extend({
  spaceOne: DS.attr('string'),
  spaceTwo: DS.attr('string'),
  spaceThree: DS.attr('string'),
  spaceFour: DS.attr('string'),
  spaceFive: DS.attr('string'),
  spaceSix: DS.attr('string'),
  spaceSeven: DS.attr('string'),
  spaceEight: DS.attr('string')
});

Test.Vocabulary.reopenClass({
  FIXTURES: [
 {
  id: 1,
  spaceOne: 'in',
  spaceTwo: 'gifted',
  spaceThree: 'hopeless',
  spaceFour: 'skilful',
  spaceFive: 'of talented',
  spaceSix: 'aptitude for',
  spaceSeven: 'expert',
  spaceEight: 'talented'
 },
 {
  id: 2,
  spaceOne: 'Lorem Ipsum One',
  spaceTwo: 'Lorem Ipsum Two',
  spaceThree: 'Lorem Ipsum Three',
  spaceFour: 'Lorem Ipsum Four',
  spaceFive: 'Lorem Ipsum Five',
  spaceSix: 'Lorem Ipsum Six',
  spaceSeven: 'Lorem Ipsum Seven',
  spaceEight: 'Lorem Ipsum Eight'
 }
  ]
});