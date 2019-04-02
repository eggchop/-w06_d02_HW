const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 20);
    dinosaur3 = new Dinosaur('Avimimus', 'omnivore', 30);
    dinosaur4 = new Dinosaur('alisaurus', 'carnivore', 40);
    park = new Park ('Jurassic Park', 40, [dinosaur1,dinosaur2,dinosaur3]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collection.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurToCollection(dinosaur4);
    const actual = park.collection.length;
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaurFromCollection(dinosaur2);
    const actual = park.collection.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findFavDinosaur;
    assert.deepEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
