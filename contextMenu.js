/*!***********************************************************
* contextMenu.js v1.0.1                                      *
* https://www.linkedin.com/in/muslimjon-kholjuraev-458879143/*
* free to use for beginners who wants to learn how to -      *
* write a jquery plugin or use just a simple contextmenu     *
*************************************************************/
/*
     ___   
    /* *\
    \_-_/  
   __| |__
  |  \_/  | 

*/   

(function ($) {

  // neede variables
  var clickedCoor, xCordinate, yCordinate;
  var menuState = 0, menuWidth, menuHeight, menuPosition, menuPositionX, menuPositionY, windowWidth, windowHeight;

  // assign default action to right click
  window.onload = function() {
      document.addEventListener("contextmenu", function(e){
        e.preventDefault();
      }, false);
    } 
  // jquery plugin public funcition
  $.fn.contextMenus = function (options, element, parent){
  	  $('.contextmenu').remove();
      var lists = {
        lists:  [
        			{names : 'edit', icon: 'pencil', serves: false, html_attributes: ''}, 
        			{names : 'delete', icon: 'trash', serves: 'toNothing', html_attributes: '' }
        		]};

      var settings  = $.extend(lists, options);

      items = settings.lists;

      
      div = document.createElement('div'); 
      $(div).addClass('contextmenu')
          .html('<nav id="context-menu" class="context-menu"><ul class="context-menu__items" id="contex_list"></ul></nav>')
          .appendTo('.list-group');
        
          
      items.forEach(function(item) { 
          var li = $('<li class="context-menu__item" '+item.html_attributes+' ><div class="context-menu__link" ><i class="fa fa-'+item.icon+' margin5"></i>'+item.names+'</div></li>');
          var fuction = item.serves;

          if (typeof fuction !== 'undefined') { 
              li.attr('onClick',''+fuction.toString()+'(this)');
          }
          
          $('#contex_list').append(li);
          
      });
      
      initMenuFunction();
      positionMenu(parent);

      
      $('html').click(function(){
            closeContext();
      });

  }


function closeContext()
{
    if ($('.contextmenu:hover').length == 0) {
        $('.contextmenu').remove();     
    }
}


  //public contextmenu close function
  $.fn.contextMenus.close = function(){ 
      $('.contextmenu').remove();

      return true;
  }

  // get the position of the mouse pointer
  function getPosition(e) {
    var posx = 0, posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;

    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    } 
    return {
      x: posx,
      y: posy
    }
  }

  //init local functions 
  function initMenuFunction() {
    contextListener();
    resizeListener();
  }

 
  //  Listens for contextmenu events.
  function contextListener() {

    var classname = document.getElementsByClassName("context-menu__item");

      for (var i = 0; i < classname.length; i++) { 
          classname[i].addEventListener('click', function (e) {
               e.stopPropagation();
          });
      }

  }


  // close it
  function toggleMenuOff() {
     $('.contextmenu').remove();
  }

  // layout adjust
  function positionMenu(e) { 
    menu = document.querySelector("#context-menu");

    clickedCoor = getPosition(e);
    xCordinate = clickedCoor.x;
    yCordinate = clickedCoor.y;

    
    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - xCordinate) < menuWidth ) {
      menu.style.left = (windowWidth - menuWidth)-0 + "px";
    } else {
      menu.style.left = xCordinate-0 + "px";
    }

    if ( Math.abs(windowHeight - yCordinate) < menuHeight ) {
      menu.style.top = (windowHeight - menuHeight)-0 + "px";
    } else {
      menu.style.top = (yCordinate-0) + "px";
    }
  }



}(jQuery));

