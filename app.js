'use strict';

// object for my seattle store
const seattleStore = document.getElementById('seattle'); 
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  // properties (end all of these with a comma)
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  totalCookies: 0,
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
    // multiply the cookie avg by number of customer per hour
    for(let i=0; i < hours.length; i++){
      let customerTraffic = this.getRandomCustomers();
      let cookiesPurchased = Math.floor(this.avg * customerTraffic);
      this.cookiesSoldEachHourArray.push(cookiesPurchased);
      console.log(this.cookiesSoldEachHourArray[i]);
      this.totalCookies += this.cookiesSoldEachHourArray[i];
    }
  },
  display: function(){
    this.getCookieSalesPerHour();
    for(let i=0; i < this.cookiesSoldEachHourArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      seattleStore.appendChild(li);
    }
    let totalSales = document.createElement('li');
    totalSales.textContent = `total: ${this.totalCookies}`;
    seattleStore.appendChild(totalSales);
  }
};

seattle.display();



const tokyoStore = document.getElementById('tokyo'); 
let tokyoHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tokyo = {
  // properties (end all of these with a comma)
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],
  totalCookies: 0,
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
    // multiply the cookie avg by number of customer per hour
    for(let i=0; i < hours.length; i++){
      let customerTraffic = this.getRandomCustomers();
      let cookiesPurchased = Math.floor(this.avg * customerTraffic);
      this.cookiesSoldEachHourArray.push(cookiesPurchased);
      console.log(this.cookiesSoldEachHourArray[i]);
      this.totalCookies += this.cookiesSoldEachHourArray[i];
    }
  },
  display: function(){
    this.getCookieSalesPerHour();
    for(let i=0; i < this.cookiesSoldEachHourArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      tokyoStore.appendChild(li);
    }
    let totalSales = document.createElement('li');
    totalSales.textContent = `total: ${this.totalCookies}`;
    tokyoStore.appendChild(totalSales);
  }
};

tokyo.display();



const dubaiStore = document.getElementById('dubai'); 
let dubaiHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let dubai = {
  // properties (end all of these with a comma)
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],
  totalCookies: 0,
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
    // multiply the cookie avg by number of customer per hour
    for(let i=0; i < hours.length; i++){
      let customerTraffic = this.getRandomCustomers();
      let cookiesPurchased = Math.floor(this.avg * customerTraffic);
      this.cookiesSoldEachHourArray.push(cookiesPurchased);
      console.log(this.cookiesSoldEachHourArray[i]);
      this.totalCookies += this.cookiesSoldEachHourArray[i];
    }
  },
  display: function(){
    this.getCookieSalesPerHour();
    for(let i=0; i < this.cookiesSoldEachHourArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      dubaiStore.appendChild(li);
    }
    let totalSales = document.createElement('li');
    totalSales.textContent = `total: ${this.totalCookies}`;
    dubaiStore.appendChild(totalSales);
  }
};

dubai.display();



const parisStore = document.getElementById('paris'); 
let parisHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let paris = {
  // properties (end all of these with a comma)
  name: 'Paris',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],
  totalCookies: 0,
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
    // multiply the cookie avg by number of customer per hour
    for(let i=0; i < hours.length; i++){
      let customerTraffic = this.getRandomCustomers();
      let cookiesPurchased = Math.floor(this.avg * customerTraffic);
      this.cookiesSoldEachHourArray.push(cookiesPurchased);
      console.log(this.cookiesSoldEachHourArray[i]);
      this.totalCookies += this.cookiesSoldEachHourArray[i];
    }
  },
  display: function(){
    this.getCookieSalesPerHour();
    for(let i=0; i < this.cookiesSoldEachHourArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      parisStore.appendChild(li);
    }
    let totalSales = document.createElement('li');
    totalSales.textContent = `total: ${this.totalCookies}`;
    parisStore.appendChild(totalSales);
  }
};

paris.display();



const limaStore = document.getElementById('lima'); 
let limaHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let lima = {
  // properties (end all of these with a comma)
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],
  totalCookies: 0,
  // functions
  // between min and max + avg
  getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
    // multiply the cookie avg by number of customer per hour
    for(let i=0; i < hours.length; i++){
      let customerTraffic = this.getRandomCustomers();
      let cookiesPurchased = Math.floor(this.avg * customerTraffic);
      this.cookiesSoldEachHourArray.push(cookiesPurchased);
      console.log(this.cookiesSoldEachHourArray[i]);
      this.totalCookies += this.cookiesSoldEachHourArray[i];
    }
  },
  display: function(){
    this.getCookieSalesPerHour();
    for(let i=0; i < this.cookiesSoldEachHourArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      limaStore.appendChild(li);
    }
    let totalSales = document.createElement('li');
    totalSales.textContent = `total: ${this.totalCookies}`;
    limaStore.appendChild(totalSales);
  }
};

lima.display();




