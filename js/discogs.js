var discogsToken = require('./../.env').discogsToken;

Discogs = function(){
}

Discogs.prototype.getReleases = function(artist, track, title, barcode, displayFunction) {
  var queryArray = [];
  if (artist != '') {
    queryArray.push('artist=' + artist);
  }
  if (track != '') {
    queryArray.push('track=' + track);
  }
  if (title != '') {
    queryArray.push('title=' + title);
  }
  if (barcode != '') {
    queryArray.push('barcode=' + barcode);
  }
  var query = queryArray.join('&');
  $.get('https://api.discogs.com/database/search?type=master&' + query +'&token=' +  discogsToken).then(function(response) {
    console.log(response.results);
    displayFunction(response.results);
  }).fail(function(error) {
    $('.showReleases').text(error);
  });
}

Discogs.prototype.getPrices = function(discogsId, displayFunction) {
  $.get('https://api.discogs.com/marketplace/price_suggestions/' + discogsId + '?token=' +  discogsToken).then(function(response) {
    console.log(response);
    // displayFunction(response.results);
  }).fail(function(error) {
    $('.showPrices').text(error);
  });
}

exports.discogsModule = Discogs;
