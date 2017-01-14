angular.module('CounterApp', [])
  .controller('CounterController', function() {
    var counter = this;
    counter.techs = {
      "PHP": 0,
      "MySQL": 0,
      "Ruby/Rails": 0,
      "JQuery": 0,
      "EmberJS": 0,
      "AngularJS": 0,
      "NodeJS": 0,
      "BackboneJS": 0,
      "SpineJS": 0,
      "KnockoutJS": 0,
      "ReactJS": 0,
      "AJAX": 0,
      "JSON": 0,
      "Bootstrap": 0,
      "C#": 0,
      "WordPress": 0,
      "Drupal": 0,
      "Laravel": 0,
      "Python": 0,
      "SASS/LESS": 0,
      "Apache": 0,
      "ASP.Net": 0,
      "XML": 0,
      "Other": 0,
      "TOTAL": 0,
    }

    counter.increment = function(techName) {
      counter.techs[techName]++;
    };

    counter.reset = function() {
      for (var property in counter.techs) {
        if (counter.techs.hasOwnProperty(property)) {
          counter.techs[property] = 0;
        }
      }
    };

  });
