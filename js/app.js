'use strict';

var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function List(townName, minPerCustomer, maxPerCustomer, avgCookieSale) {
    this.townName = townName;
    this.minPerCustomer = minPerCustomer;
    this.maxPerCustomer = maxPerCustomer;
    this.avgCookieSale = avgCookieSale;
    this.numCustPerHour = 0;
    this.avgCookie = 0;
    this.ranNumCust = 0;
    this.arryCookie = [];
    this.totalAvg = 0;
}

List.prototype.randomNumberCustPerHour = function () {
    this.ranNumCust = Math.floor(Math.random() * (this.maxPerCustomer - this.minPerCustomer + 1) + this.minPerCustomer);
    return this.ranNumCust;
}

List.prototype.custPerHour = function () {
    for (var i = 0; i < Hours.length; i++) {
        this.avgCookie = Math.floor(this.randomNumberCustPerHour() * this.avgCookieSale);
        this.arryCookie.push(this.avgCookie);
        this.totalAvg = this.totalAvg + this.avgCookie;
    }
}


List.prototype.render = function () {
    var secE = document.getElementById(this.townName);
    var h2E1 = document.createElement('h2');
    secE.appendChild(h2E1);
    h2E1.textContent = this.townName;
    var navE1 = document.createElement('nav');
    secE.appendChild(navE1);
    var ulE = document.createElement('ul');
    navE1.appendChild(ulE);

    for (var i = 0; i <= Hours.length; i++) {
        var liE = document.createElement('li');
        ulE.appendChild(liE);
        liE.textContent = `${Hours[i]}: ${this.arryCookie[i]} cookies`;
    }
    liE.textContent = `Total: ${this.totalAvg} cookies`;
}


var Seattle = new List('Seattle', 23, 65, 6.3);
var Tokyo = new List('Tokyo', 3, 24, 1.2);
var Dubai = new List('Dubai', 11, 38, 3.7);
var Paris = new List('Paris', 20, 38, 2.3);
var Lima = new List('Lima', 2, 16, 4.6);



Seattle.randomNumberCustPerHour();
Seattle.custPerHour();
Seattle.render();


Tokyo.randomNumberCustPerHour();
Tokyo.custPerHour();
Tokyo.render();

Dubai.randomNumberCustPerHour();
Dubai.custPerHour();
Dubai.render();


Paris.randomNumberCustPerHour();
Paris.custPerHour();
Paris.render();

Lima.randomNumberCustPerHour();
Lima.custPerHour();
Lima.render();

