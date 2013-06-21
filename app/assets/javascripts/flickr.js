var search;
var per_page = 20;
var page = 1;
var json_results;

function search_flickr(){
  search = $('#search').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c6e1f137bbeb666a1c0a884b609e286&text=' + search + '&per_page=' + per_page + '&page=' + page + '&format=json&jsoncallback=?'
  $.getJSON(url,
    function(data){
      json_results = data;
    }
  );
}


function get_photo_src(index){

}

//jQuery alternative to $(document).ready(function(){}); that is prettier (less verbose)
$(function(){

  $('#search-btn').on('click', search_flickr);

});








