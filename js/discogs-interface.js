var Discogs = require('./../js/discogs.js').discogsModule;

var displayReleases = function(releases) {
  $('#showReleases').empty();
  for (var i = 0; i < releases.length; i++) {
    var title = releases[i].title;
    var discogsId = releases[i].id;
    var format = releases[i].format[0];
    var country = releases[i].country;
    $('#showReleases').append('<li class="list-group-item">'+ title + ' [' + format + '/' + country + '] <a href=\'#\' class=\'find-prices\'>' + discogsId + '</button></li>');
  }
}

$(document).ready(function() {

  var myDiscogs = new Discogs();

  $('#find-releases').submit(function(event) {
    event.preventDefault();
    var artist = $('#artist').val();
    var track = $('#track').val();
    var title = $('#title').val();
    var barcode = $('#barcode').val();
    myDiscogs.getReleases(artist, track, title, barcode, displayReleases);
  });

  $('ul').on('click', 'a.find-prices', function() {
    var discogsId = $(this).text();
    console.log(discogsId);
    myDiscogs.getPrices(discogsId);
  });

});
