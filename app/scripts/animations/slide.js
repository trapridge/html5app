'use strict';

angular.module('html5app')
  
  .animation('.slide', function() {

	var duration = 150;

    return {
      enter: function(element, done) {

        element.hide();
        jQuery(element).slideDown(duration, done);

        return function(cancelled) {
          if(cancelled) {
            jQuery(element).stop();
          }
        }
      },
      leave: function(element, done) {
        jQuery(element).slideUp(duration, done);

        return function(cancelled) {
          if(cancelled) {
            jQuery(element).stop();
          }
        }
      },
      // move: function(element, done) { },
      // show: function(element, done) { },
      // hide: function(element, done) { },
      // addClass: function(element, className, done) { },
      // removeClass: function(element, className, done) { },
    }
  });