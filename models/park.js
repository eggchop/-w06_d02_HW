const Park = function(name, ticketPrice, collection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = collection;
}

Park.prototype.addDinosaurToCollection = function (dinosaur) {
  this.collection.push(dinosaur);
}

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
  for( let i = 0; i < this.collection.length; i++){
    let dino = this.collection;
   if ( dino[i] === dinosaur) {
     dino.splice(i, 1);
    }
  }
};

Park.prototype.findFavDinosaur = function() {
  let favDino = this.collection[0];
  for (dino of this.collection) {
    if (dino.guestsAttractedPerDay > favDino.guestsAttractedPerDay) {
      favDino = dino;
    };
  };
  return favDino;
};

Park.prototype.findBySpecies = function(species) {
  let dinoFound = [];
  for (dino of this.collection) {
    if (dino.species === species) {
      dinoFound.push(dino);
    };
  };
  return dinoFound;
};

Park.prototype.removeBySpecies = function(species) {
  let dinoFound = [];
  for (dino of this.collection) {
    if (dino.species !== species) {
      dinoFound.push(dino);
    };
  };
  return dinoFound;
};

module.exports = Park;
