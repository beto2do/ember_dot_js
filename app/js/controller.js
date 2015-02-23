Test.TestVocabularyController = Ember.ObjectController.extend({
  options: {
  	one:{a:'at',b:'for',c:'in'},
  	two:{a:'useless',b:'useful',c:'gifted'},
  	three:{a:'skilful',b:'hopeless',c:'an expert'},
  	four:{a:'useless',b:'hopeless',c:'skilful'},
  	five:{a:'of ability',b:'of skilful',c:'of talented'},
  	six:{a:'expert in',b:'aptitude for',c:'aptitude to'},
  	seven:{a:'gifted',b:'expert',c:'talent in'},
  	eight:{a:'gifted at',b:'expert',c:'talented'}
  },
  selectByUser: {
  	one:{number:'one',letter:''},
  	two:{number:'two',letter:''},
  	three:{number:'three',letter:''},
  	four:{number:'four',letter:''},
  	five:{number:'five',letter:''},
  	six:{number:'six',letter:''},
  	seven:{number:'seven',letter:''},
  	eight:{number:'eight',letter:''}
  },
  spaceOne : function(){
  	var result = '____';
  	var letter = this.selectByUser.one.letter;
  	if(letter){
  		result = this.options.one[letter];
  	}
  	return result;
  }.property('model.spaceOne'),
  spaceTwo : function(){
  	var result = '____';
  	var letter = this.selectByUser.two.letter;
  	if(letter){
  		result = this.options.two[letter];
  	}
  	return result;
  }.property('model.spaceTwo'),
  spaceThree : function(){
  	var result = '____';
  	var letter = this.selectByUser.three.letter;
  	if(letter){
  		result = this.options.three[letter];
  	}
  	return result;
  }.property('model.spaceThree'),
  spaceFour : function(){
  	var result = '____';
  	var letter = this.selectByUser.four.letter;
  	if(letter){
  		result = this.options.four[letter];
  	}
  	return result;
  }.property('model.spaceFour'),
  spaceFive: function(){
  	var result = '____';
  	var letter = this.selectByUser.five.letter;
  	if(letter){
  		result = this.options.five[letter];
  	}
  	return result;
  }.property('model.spaceFive'),
  spaceSix : function(){
  	var result = '____';
  	var letter = this.selectByUser.six.letter;
  	if(letter){
  		result = this.options.six[letter];
  	}
  	return result;
  }.property('model.spaceSix'),
  spaceSeven : function(){
  	var result = '____';
  	var letter = this.selectByUser.seven.letter;
  	if(letter){
  		result = this.options.seven[letter];
  	}
  	return result;
  }.property('model.spaceSeven'),
  spaceEight : function(){
  	var result = '____';
  	var letter = this.selectByUser.eight.letter;
  	if(letter){
  		result = this.options.eight[letter];
  	}
  	return result;
  }.property('model.spaceEight')
});