const Park = function(name, ticketPrice, collection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = collection;
}

Park.prototype.addDinosaurToCollection = function (dinosaur) {
  this.collection.push(dinosaur);
}

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
  for( var i = 0; i < this.collection.length; i++){
    var dino = this.collection;
   if ( dino[i] === dinosaur) {
     dino.splice(i, 1);
    }
  }
};

Park.prototype.findFavDinosaur = function () {
  var objects = this.collection;
  return Math.max.apply(Math, objects.map(function(o) { return o.guestsAttractedPerDay; }))
};

module.exports = Park;
