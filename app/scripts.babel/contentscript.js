'use strict';

var timer = 0;
document.addEventListener('DOMNodeInserted', function(){
  if(timer) return;
  timer = setTimeout(function(){
    timer = 0;
    $("div.media-spoiler").each(function(){
      $(this).trigger('click');
    });
  }, 200);
}, false);
