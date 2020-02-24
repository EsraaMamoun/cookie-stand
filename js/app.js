'use strict';
//Seattle
var Seattle = {
    minPerCus: 23,
    maxPerCus: 65,
    avgCookieSale: 6.3,
    numCustPerHour: 0,
    avgCookie: 0,
    totalAvg: 0,
    Hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custPerHour: function (min, max) {
        this.numCustPerHour = randomNumberCustPerHour(min, max);
        // console.log(this.numCustPerHour);
    },

    theAvg: function (min, max) {
        for (var i = 0; i < Seattle.Hours.length; i++) {
            this.avgCookie = randomAvd(min, max);
            console.log(this.avgCookie);
            // this.totalAvg = this.totalAvg + this.avgCookie;
        }
    },
    inHTML: function () {
        var secE = document.getElementById('Seattle');
        var h2E1 = document.createElement('h2');
        secE.appendChild(h2E1);
        h2E1.textContent = 'Seattle';
        var navE1 = document.createElement('nav');
        secE.appendChild(navE1);
        var ulE = document.createElement('ul');
        navE1.appendChild(ulE);

        for(var i =0; i<= this.Hours.length ; i++) {
            var liE = document.createElement('li');
            ulE.appendChild(liE);
            liE.textContent = `${this.Hours[i]}: ${this.avgCookie} cookies`
        }
        liE.textContent = `Total: ${this.totalAvg} cookies`
    }
}
Seattle.custPerHour(Seattle.minPerCus, Seattle.maxPerCus);
Seattle.theAvg(Seattle.avgCookieSale, Seattle.numCustPerHour);
console.log(Seattle.totalAvg);
Seattle.inHTML();

function randomNumberCustPerHour(min, max) {
    var ranNumCust = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumCust;
}

function randomAvd(min, max) {
    var ranAvg = Math.floor(Math.random() * (max - min + 1) + min);
    return ranAvg;
}



//Tokyo
var Tokyo = {
    minPerCus2: 3,
    maxPerCus2: 24,
    avgCookieSale2: 1.2,
    numCustPerHour2: 0,
    avgCookie2: [0],
    totalAvg2: 0,
    Hours2: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custPerHour2: function (min, max) {
        this.numCustPerHour2 = randomNumberCustPerHour2(min, max);
    
    },

    theAvg2: function (min, max) {
        for (var i = 0; i < Tokyo.Hours2.length; i++) {
            this.avgCookie2 = randomAvd2(min, max);
            console.log(this.avgCookie2);
            this.totalAvg2 = this.totalAvg2 + this.avgCookie2;
        }
    },
    inHTML2: function () {
        var secE2 = document.getElementById('Tokyo');
        var h2E2 = document.createElement('h2');
        secE2.appendChild(h2E2);
        h2E2.textContent = 'Tokyo';
        var navE2 = document.createElement('nav');
        secE2.appendChild(navE2);
        var ulE2 = document.createElement('ul');
        navE2.appendChild(ulE2);

        for(var i =0; i<=this.Hours2.length ; i++) {
            var liE2 = document.createElement('li');
            ulE2.appendChild(liE2);
            liE2.textContent = `${this.Hours2[i]}: ${this.avgCookie2[i]} cookies`
        }
        liE2.textContent = `Total: ${this.totalAvg2} cookies`
    }
}
Tokyo.custPerHour2(Tokyo.minPerCus2, Tokyo.maxPerCus2);
Tokyo.theAvg2(Tokyo.avgCookieSale2, Tokyo.numCustPerHour2);
console.log(Tokyo.totalAvg2);
Tokyo.inHTML2();

function randomNumberCustPerHour2(min, max) {
    var ranNumCust2 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumCust2;
}

function randomAvd2(min, max) {
    var ranAvg2 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranAvg2;
}




//Dubai
var Dubai = {
    minPerCus3: 11,
    maxPerCus3: 38,
    avgCookieSale3: 3.7,
    numCustPerHour3: 0,
    avgCookie3: [0],
    totalAvg3: 0,
    Hours3: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custPerHour3: function (min, max) {
        this.numCustPerHour3 = randomNumberCustPerHour3(min, max);
    },

    theAvg3: function (min, max) {
        for (var i = 0; i < Dubai.Hours3.length; i++) {
            this.avgCookie3 = randomAvd3(min, max);
            console.log(this.avgCookie3);
            this.totalAvg3 = this.totalAvg3 + this.avgCookie3;

        }
    },
    inHTML3: function () {
        var secE3 = document.getElementById('Dubai');
        var h2E3 = document.createElement('h2');
        secE3.appendChild(h2E3);
        h2E3.textContent = 'Dubai';
        var navE3 = document.createElement('nav');
        secE3.appendChild(navE3);
        var ulE3 = document.createElement('ul');
        navE3.appendChild(ulE3);

        for(var i =0; i<=this.Hours3.length ; i++) {
            var liE3 = document.createElement('li');
            ulE3.appendChild(liE3);
            liE3.textContent = `${this.Hours3[i]}: ${this.avgCookie3[i]} cookies`
        }
        liE3.textContent = `Total: ${this.totalAvg3} cookies`
    }
}
Dubai.custPerHour3(Dubai.minPerCus3, Dubai.maxPerCus3);
Dubai.theAvg3(Dubai.avgCookieSale3, Dubai.numCustPerHour3);
console.log(Dubai.totalAvg3);
Dubai.inHTML3();

function randomNumberCustPerHour3(min, max) {
    var ranNumCust3 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumCust3;
}

function randomAvd3(min, max) {
    var ranAvg3 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranAvg3;
}





//Paris
var Paris = {
    minPerCus4: 20,
    maxPerCus4: 38,
    avgCookieSale4: 2.3,
    numCustPerHour4: 0,
    avgCookie4: [0],
    totalAvg4: 0,
    Hours4: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custPerHour4: function (min, max) {
        this.numCustPerHour4 = randomNumberCustPerHour4(min, max);
    },

    theAvg4: function (min, max) {
        for (var i = 0; i < Paris.Hours4.length; i++) {
            this.avgCookie4 = randomAvd4(min, max);
            console.log(this.avgCookie4);
            this.totalAvg4 = this.totalAvg4 + this.avgCookie4;
        }
    },
    inHTML4: function () {
        var secE4 = document.getElementById('Paris');
        var h2E4 = document.createElement('h2');
        secE4.appendChild(h2E4);
        h2E4.textContent = 'Paris';
        var navE4 = document.createElement('nav');
        secE4.appendChild(navE4);
        var ulE4 = document.createElement('ul');
        navE4.appendChild(ulE4);

        for(var i =0; i<=this.Hours4.length ; i++) {
            var liE4 = document.createElement('li');
            ulE4.appendChild(liE4);
            liE4.textContent = `${this.Hours4[i]}: ${this.avgCookie4[i]} cookies`
        }
        liE4.textContent = `Total: ${this.totalAvg4} cookies`
    }
}
Paris.custPerHour4(Paris.minPerCus4, Paris.maxPerCus4);
Paris.theAvg4(Paris.avgCookieSale4, Paris.numCustPerHour4);
console.log(Paris.totalAvg4);
Paris.inHTML4();

function randomNumberCustPerHour4(min, max) {
    var ranNumCust = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumCust;
}

function randomAvd4(min, max) {
    var ranAvg = Math.floor(Math.random() * (max - min + 1) + min);
    return ranAvg;
}





//Lima
var Lima = {
    minPerCus5: 2,
    maxPerCus5: 16,
    avgCookieSale5: 4.6,
    numCustPerHour5: 0,
    avgCookie5: [0],
    totalAvg5: 0,
    Hours5: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    custPerHour5: function (min, max) {
        this.numCustPerHour5 = randomNumberCustPerHour5(min, max);
    },

    theAvg5: function (min, max) {
        for (var i = 0; i < Lima.Hours5.length; i++) {
            this.avgCookie5 = randomAvd5(min, max);
            console.log(this.avgCookie5);
            this.totalAvg5 = this.totalAvg5 + this.avgCookie5;
        }
    },
    inHTML5: function () {
        var secE5 = document.getElementById('Lima');
        var h2E5 = document.createElement('h2');
        secE5.appendChild(h2E5);
        h2E5.textContent = 'Lima';
        var navE5 = document.createElement('nav');
        secE5.appendChild(navE5);
        var ulE5 = document.createElement('ul');
        navE5.appendChild(ulE5);

        for(var i =0; i<=this.Hours5.length ; i++) {
            var liE5 = document.createElement('li');
            ulE5.appendChild(liE5);
            liE5.textContent = `${this.Hours5[i]}: ${this.avgCookie5[i]} cookies`
        }
        liE5.textContent = `Total: ${this.totalAvg5} cookies`
    }
}
Lima.custPerHour5(Lima.minPerCus5, Lima.maxPerCus5);
Lima.theAvg5(Lima.avgCookieSale5, Lima.numCustPerHour5);
console.log(Lima.totalAvg5);
Lima.inHTML5();

function randomNumberCustPerHour5(min, max) {
    var ranNumCust5 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNumCust5;
}

function randomAvd5(min, max) {
    var ranAvg5 = Math.floor(Math.random() * (max - min + 1) + min);
    return ranAvg5;
}