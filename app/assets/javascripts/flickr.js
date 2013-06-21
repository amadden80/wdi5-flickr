var search;
var per_page = 20;
var page = 1;
var json_photos;

function search_flickr(){
  search = $('#search').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c6e1f137bbeb666a1c0a884b609e286&text=' + search + '&per_page=' + per_page + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url,
    function(data){
      json_photos = data.photos.photo;
    }
  ).done(add_photos);
}

//Loops and adds each photo in the returned photos
function add_photos(){
  for(var i = 0; i<json_photos.length; i++){
    add_photo(i);
  }
}

function add_photo(index){
  var image = $('<img>');
  image.attr('src', get_photo_src(index));
  $('#photo-bag').append(image);
}

function get_photo_src(index){
  var photo = json_photos[index];
  var src = "http://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg";
  return src;
}

//jQuery alternative to $(document).ready(function(){}); that is prettier (less verbose)
$(function(){

  $('#search-btn').on('click', search_flickr);

});








