function search_flickr(){
  console.log('Searching...');
}

//jQuery alternative to $(document).ready(function(){}); that is prettier (less verbose)
$(function(){

  $('#search-btn').on('click', search_flickr);

});