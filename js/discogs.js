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
  console.log(query);
  $.get('https://api.discogs.com/database/search?' + query +'&token=' +  discogsToken).then(function(response) {
    console.log(response.results);
    displayFunction(response.results);
  }).fail(function(error) {
    console.log(error);
    $('.showReleases').text(error);
  });
}

exports.discogsModule = Discogs;
