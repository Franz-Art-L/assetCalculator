// console.log the first stock only its name
$(document).ready(function() {
    $('tbody tr').each(function(index, element) {
        console.log($(element).children().first().text());
    });
});

// calculate total gain/loss based on its marketprice
var updateMarketValue = element => {
    var marketPrice = parseFloat($(element).find('.marketPrice input').val());
    var sharesOwned = parseFloat($(element).find('.totalShare input').val());

    var marketValue = marketPrice * sharesOwned;
    $(element).children('.marketValue').html(marketValue);
    return marketValue;
}

var updateGainLoss = (element, marketValue) => {
    var averagePrice = parseFloat($(element).find('.averagePrice input').val());
    var sharesOwned = parseFloat($(element).find('.totalShare input').val());
    var totalCost = sharesOwned.marketPrice;

    var unrealizedGainLoss = marketValue - totalCost;
    
    $(document).children('.totalGainLoss').html(unrealizedGainLoss);

    return unrealizedGainLoss;
}

var sum = function(acc, val) { return acc + val; };


var updatedPortfolioAndProfit = () => {
    var stocksMarketValues = [];
    var stocksUnrealizedProfits = [];

    $('tbody tr').each(function (index, element) {
        var marketValue = updateMarketValue(element);
        stocksMarketValues.push(marketValue);
        var portfolioGainLoss = updateGainLoss(element, marketValue);
        stocksUnrealizedProfits.push(portfolioGainLoss);
    });
};