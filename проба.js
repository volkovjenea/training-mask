$(document).ready(function(){
  $('mask1.jpg').zoom({
    url: 'mask2.jpg', 
    callback: function(){
      $(this).colorbox({href: this.src});
    }
  });
});