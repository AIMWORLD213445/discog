var Discogs = require('./../js/discogs.js').discogsModule;

var displayReleases = function(releases) {
  $('#showReleases').empty();
  for (var i = 0; i < releases.length; i++) {
    var title = releases[i].title;
    var discogsId = releases[i].id;
    $('#showReleases').append('<li class="list-group-item">'+ title +' (' + discogsId + ')</li>');
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

});
