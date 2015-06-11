'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.loading-on-button');
  } catch (e) {
    module = angular.module('awelzijn.loading-on-button', []);
  }
  module.directive('awelzijnLoadingOnButton', [function () {
    return {
      link: function (scope, element, attrs) {
        scope.$watch(
          function () {
            return scope.$eval(attrs.awelzijnLoadingOnButton);
          },
          function (value) {
            if (value) {
              if (!attrs.hasOwnProperty('ngDisabled')) {
                element.addClass('disabled').attr('disabled', 'disabled');
              }

              element.data('resetText', element.html());
              element.html(element.data('loading-text') + '<i class="fa fa-refresh fa-spin" style="margin-left:15px";></i>');
            } else {
              if (!attrs.hasOwnProperty('ngDisabled')) {
                element.removeClass('disabled').removeAttr('disabled');
              }

              element.html(element.data('resetText'));
            }
          }
          );
      }
    };
  }]);
})();
;