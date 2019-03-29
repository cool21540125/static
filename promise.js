buyBurger(function(burger) {
  eatBurger(burger, throwJunk);
});
playMobile();

function buyBurger(cb) {
  console.log('buy burger');
  setTimeout(function() {
    burger = {
      food: 'burger',
      size: 'L',
      type: 'beef'
    }
    cb(burger);
  }, 2000);
}

function eatBurger(burger, cb) {
  console.log('Eating ' + burger.food + ' type : ' + burger.type);
  setTimeout(function() {
    var obj = {
      waste: 'lettuce'
    }
    cb(obj);
  }, 5000);
}

function throwJunk(junk) {

}

function playMobile() {

}