Array.prototype.clone = function() {
	return this.slice(0);
};

angular.module('PorridgeApp', [])
  .controller('PorridgeController', function() {
    var porridgeGen = this;
    var randomIndex;
    var randomAmount;
    porridgeGen.grains = [
      'Steel-cut Oats',
      'Millet',
      'Quinoa',
      'Pearl Barley',
      'Buckwheat Groats',
      'Brown Rice',
      'Farro'];
    porridgeGen.sweets = [
      'Maple Syrup',
      'Honey',
      'Agave Nectar',
      'Brown sugar',
      'Blackstrap Molasses'];
    porridgeGen.spices = [
      'Cloves',
      'Coriander',
      'Cinnamon',
      'Ginger',
      'Nutmeg',
      'Cardamom',
      'Saffron'];

    porridgeGen.getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    porridgeGen.generate = function() {
      //Create/clear array and push required ingredients into it.
      porridgeGen.ingredients = [];
      porridgeGen.ingredients.push({name:'Water', amount:'2 cups', style: 'regular'});
      porridgeGen.ingredients.push({name:'Milk*', amount:'2 cups', style: 'regular'});
      porridgeGen.ingredients.push({name:'Vanilla', amount:'1-2 tbsp', style: 'regular'});
      porridgeGen.ingredients.push({name:'Salt', amount:'1-2 tsp', style: 'regular'});

      //Randomly decide which sweetener to use.
      randomIndex = porridgeGen.getRandomInt(0,4);
      porridgeGen.ingredients.push({name:porridgeGen.sweets[randomIndex], amount:'2 tbsp', style: 'regular'});

      //Randomly decide how many grains to include, then randomly select them.
      randomAmount = porridgeGen.getRandomInt(1,4);
      porridgeGen.grainsCopy = porridgeGen.grains.clone();
      for (index = 0; index < randomAmount; index++) {
        randomIndex = porridgeGen.getRandomInt(0, porridgeGen.grainsCopy.length-1);
        if (randomAmount === 1) {
          porridgeGen.ingredients.push({name:porridgeGen.grainsCopy[randomIndex], amount:'1 cup', style: 'grain'});
        } else {
          porridgeGen.ingredients.push({name:porridgeGen.grainsCopy[randomIndex], amount:'1/'+randomAmount+' cup', style: 'grain'});
        }
        porridgeGen.grainsCopy.splice(randomIndex, 1);
      }

      //Randomly decide how many spices to include, then randomly select them.
      randomAmount = porridgeGen.getRandomInt(1,porridgeGen.spices.length);
      porridgeGen.spicesCopy = porridgeGen.spices.clone();
      for (index = 0; index < randomAmount; index++) {
        randomIndex = porridgeGen.getRandomInt(0, porridgeGen.spicesCopy.length-1);
        porridgeGen.ingredients.push({name:porridgeGen.spicesCopy[randomIndex], amount:'a dash', style: 'spice'});
        porridgeGen.spicesCopy.splice(randomIndex, 1);
      }
    };
  });
