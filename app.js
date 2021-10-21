'use strict';

// object for my seattle store
const seattleStore = document.getElementById('seattleList'); 
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  // properties (end all of these with a comma)
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {

  },
};

console.log(seattle.getRandomCustomers());
