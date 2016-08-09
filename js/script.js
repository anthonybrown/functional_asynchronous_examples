'use strict';

var output = document.querySelector('.output');

// FOR LOOP SOLUTION //

/* function getStockSymbols (stocks) {
	var symbols = [];
	var counter,
			stock;

	for (counter = 0; counter < stocks.length; counter++) {
		stock = stocks[counter];
		symbols.push(stock.symbol);
	}
	return symbols;
} */

// FOREACH SOLUTION //

/*
function getStockSymbols (stocks) {

	var symbols = [];

	stocks.forEach(function (stock) {
		symbols.push(stock.symbol);
	});

	return symbols;
}
*/

function getStockSymbols (stocks) {
	return stocks.map(function (stock) {
		return stock.symbol;
	});
}

function getStockPrices (stocks) {
	return stocks.map(function (stock) {
		return '$' + stock.price;
	});
}

function getStockVolume (stocks) {
	return stocks.map(function (stock) {
		return stock.volume;
	});
}

// Array already has a map method
// just overwriting the map function already on the Array

/*
Array.prototype.map = function (projection) {
	var results = [];

	this.forEach(function (item) {
		results.push(projection (item))
	});

	return results;
}
*/

var vol = [
	{symbol: 'XFX', price: '240.33', volume: 23423},
	{symbol: 'TNZ', price: '333.33', volume: 321  },
	{symbol: 'JXJ', price: '121.23', volume: 5372},
];

var symbols = getStockSymbols([
	{ symbol: 'XFX', price: '240.33', volume: 23423 },
	{ symbol: 'TNZ', price: '333.33', volume: 321   },
	{ symbol: 'JXJ', price: '121.23', volume: 5372  }
]);

var price = getStockPrices([
	{ symbol: 'XFX', price: '240.33', volume: 23423 },
	{ symbol: 'TNZ', price: '333.33', volume: 321   },
	{ symbol: 'JXJ', price: '121.23', volume: 5372  }
]);

var volume = getStockVolume([
	{ symbol: 'XFX', price: '240.33', volume: 23423 },
	{ symbol: 'TNZ', price: '333.33', volume: 321   },
	{ symbol: 'JXJ', price: '121.23', volume: 5372  }
]);
output.innerHTML += JSON.stringify(symbols);
