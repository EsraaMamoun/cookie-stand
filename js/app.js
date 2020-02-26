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
    this.randomNumberCustPerHour();
    for (var i = 0; i < Hours.length; i++) {
        this.avgCookie = Math.floor(this.randomNumberCustPerHour() * this.avgCookieSale);
        this.arryCookie.push(this.avgCookie);
        this.totalAvg = this.totalAvg + this.avgCookie;
    }
    this.arryCookie.push(this.totalAvg);
}


var secE = document.getElementById('idTable');
var tableE = document.createElement('table');
secE.appendChild(tableE);


function Header(tableE) {
    var tr2 = document.createElement('tr');
    tableE.appendChild(tr2);

    var th4 = document.createElement('th');
    tableE.appendChild(th4);
    th4.textContent = null;

    for (var i = 0; i < Hours.length; i++) {
        var th2 = document.createElement('th');
        tableE.appendChild(th2);
        th2.textContent = Hours[i];
    }
    var th5 = document.createElement('th');
    tableE.appendChild(th5);
    th5.textContent = '(Daily Location Total)';
}
Header(tableE);


List.prototype.render = function () {
    this.custPerHour();

    var tr1 = document.createElement('tr');
    tableE.appendChild(tr1);


    var th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = this.townName;

    for (var i = 0; i <= Hours.length; i++) {
        var td = document.createElement('td');
        tr1.appendChild(td);
        td.textContent = this.arryCookie[i];
    }
}



var Seattle = new List('Seattle', 23, 65, 6.3);
var Tokyo = new List('Tokyo', 3, 24, 1.2);
var Dubai = new List('Dubai', 11, 38, 3.7);
var Paris = new List('Paris', 20, 38, 2.3);
var Lima = new List('Lima', 2, 16, 4.6);

var shops = [Seattle, Tokyo, Dubai, Paris, Lima];
for (var i = 0; i < shops.length; i++) {
    shops[i].render();
}



var sumHour = 0;
var arrySumHour = [];
var totalTotal = 0;
function Footer(tableE) {
    var tr7 = document.createElement('tr');
    tableE.appendChild(tr7);

    var th6 = document.createElement('th');
    tableE.appendChild(th6);
    th6.textContent = 'Totals';

    for (var i = 0; i < Hours.length; i++) {
        sumHour = Seattle.arryCookie[i] + Tokyo.arryCookie[i] + Dubai.arryCookie[i] + Paris.arryCookie[i] + Lima.arryCookie[i];
        arrySumHour.push(sumHour);
    }
    for (var i = 0; i < arrySumHour.length; i++) {
        totalTotal = totalTotal + arrySumHour[i];
    }
    for (var i = 0; i < arrySumHour.length; i++) {
        var td8 = document.createElement('td');
        tableE.appendChild(td8);
        td8.textContent = arrySumHour[i];
    }
    var th9 = document.createElement('td');
    tableE.appendChild(th9);
    th9.textContent = totalTotal;
}
Footer(tableE);



var cookieForms = document.getElementById('salesForm');
cookieForms.addEventListener('submit', function (event) {
event.preventDefault();
console.log(event);
var name = event.target.name.value;
console.log(name);
var min = event.target.min.value;
console.log(min);
var max = event.target.max.value;
console.log(max);
var avg = event.target.avg.value;
console.log(avg);
var salesOpject = new List(name, min, max, avg);
salesOpject.randomNumberCustPerHour();
salesOpject.custPerHour();
salesOpject.render();
cookieForms.reset();
});