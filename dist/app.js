(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
app.controller('HomeController', 
  ['$scope', '$window', '$state', 'StateData', 'HomeData', 
	function($scope, $window, $state, StateData, HomeData) {

	  $scope.contact = HomeData.getContact();

  	  $scope.images = [];
	
	$scope.getImages = function () {
		var image_list = [
			'http://www.sarasotaconstructionfla.com/remodeling2.jpg',
			'http://www.probuiltconstruction.com/images/Custom-Decks-thumbnail.jpg',
			'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQI3XLO7VvOlLYuft-quuWTHHrb7UPyCl74F1ttpdnxh4wJgIRAqw',
			'http://www.negocioinversiones.com/wp-content/uploads/2015/01/home-remodeling-ideas.jpg',
			'http://freshcornbuildingcompany.com/assets/Fotolia-44024139-X-c-r.jpg',
			'http://www.designbuildremodelinggroup.com/wp-content/fancygallery/Kitchens/Kitchens/1318527193_Washington-22.jpg'
		];
		
		for (var i = 0; i <= 5; i++) {
			$scope.images.push({ 
				src: image_list[i],
				safeSrc: image_list[i],
				thumb: image_list[i],
				caption: 'Loading...',
				size: screenSize(800, 500),
				type: 'image'
			});
		}
	};
	
	var screenSize = function (width, height) {
		var x = width ? width : $window.innerWidth;
		var y = height ? height : $window.innerHeight;
		
		return x + 'x' + y;
	}; 
	
	$scope.getImages();


	}]);
},{}],2:[function(require,module,exports){
require('./home-controller.js');
require('./nav-controller.js');
},{"./home-controller.js":1,"./nav-controller.js":3}],3:[function(require,module,exports){
app.controller('NavController', 
  ['$scope', '$state', '$log', '$timeout', '$location', '$anchorScroll',
	function($scope, $state, $log, $timeout, $location, $anchorScroll) {



    $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        $log.log(x);
        $log.log($location.hash(x))
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

	  $scope.current_state = $state.current.name;
	  $scope.$state = $state;

	  var _updateState = function updateState() {
  	  	$scope.current_state = $state.current.name;
  	  	if ($scope.current_state === 'home') {
  	  		$timeout(function () {
  	  			$('.slider').slider('pause');
  	  			//$log.log($('.slider').slider());
  	  			$log.log("paused");
  	  		}, 30000);
  	  	}
  	  };

  	  	$timeout(function () {
  	  		_updateState();
  	  	});

  	  $scope.updateState = _updateState();



	}]);
},{}],4:[function(require,module,exports){
//'use strict';

/* Directives */

angular.module('myapp')
	.directive('authapp', ['$cookieStore', '$http', '$rootScope', function($cookieStore, $http, $rootScope) {
 		return {
 			restrict: 'A',
    		link: function ($scope, elem, attrs) {

    		  var main = document.getElementById("main");
    		  var login = document.getElementById("login-holder");

    		  var applyLogin = function(good) {
    		  	if (good) {
	    		  	main.style.display = "block";
	        		login.style.display = "none";
	        	} else {
	        		main.style.display = "none";
	        		login.style.display = "block";
	        	}
    		  };

          $scope.$on('event:auth-loginRequired', function () {
            applyLogin(false);
          });

          $scope.$on('event:auth-loginConfirmed', function () {
            applyLogin(true);
          });

    		}
 		};
 	}])
 	.directive('login', ['Authentication', '$http', '$cookieStore', 'authService', function(Authentication, $http, $cookieStore, authService) {
 		return {
 			restrict: 'A',
 			template: " <form> " +
     					    "<label>Username</label>" +
      						"<input type='text' ng-model='username'>" +
      						"<label>Password</label>" +
      						"<input type='password' ng-model='password'>" +
      						"<br>" +
      						"<input type='submit'>" +
    					"</form>",
 			link: function($scope, elem, attrs) {

 				elem.bind('submit', function() {

					var user_data = {
		                "username": $scope.username,
		                "password": $scope.password,
		            };

					//$http.post(constants.serverAddress + "api-token-auth", user_data)
                Authentication.auth(user_data).$promise.then(function(response) {
                  $cookieStore.put('djangotoken', response.token);
                    $http.defaults.headers.common.Authorization = 'Token ' + response.token;
                    authService.loginConfirmed();
                });
		            //$http.post("http://localhost:8001/api-token-auth/", user_data)
		            //    .success(function(response) {
		            //    	$cookieStore.put('djangotoken', response.token);
		            //        $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
		            //        authService.loginConfirmed();
		            //});

 				});

 			}
 		};
 	}]);

},{}],5:[function(require,module,exports){
var ngPhotoSwipe = angular.module('ngPhotoSwipe', []);

ngPhotoSwipe.directive('photoSwipe', [ function () {
	var template = 
		'<div class="photoswipe-gallery" itemscope itemtype="http://schema.org/ImageGallery">' +
			'<div photo-gallery images="images"></div>' +
		'</div>';
		
	var initPhotoSwipeFromDOM = function(gallerySelector) {
		var parseThumbnailElements = function(el) {
			var thumbElements = el.childNodes,
				numNodes = thumbElements.length,
				items = [],
				figureEl,
				childElements,
				linkEl,
				size,
				item;

			for(var i = 0; i < numNodes; i++) {
				figureEl = thumbElements[i]; 
				// include only element nodes 
				if(figureEl.nodeType !== 1) {
					continue;
				}

				linkEl = figureEl.getElementsByTagName('a')[0];
				size = linkEl.getAttribute('data-size').split('x');

				// create slide object
				item = {
					src: linkEl.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};

				if(figureEl.children.length > 1) {
					// <figcaption> content
					item.title = figureEl.children[1].innerHTML; 
				}
	 
				if(linkEl.children.length > 0) {
					// <img> thumbnail element, retrieving thumbnail url
					item.msrc = linkEl.children[0].getAttribute('src');
				} 
			   
				item.el = figureEl; // save link to element for getThumbBoundsFn
				items.push(item);
			}

			return items;
		};

		// find nearest parent element
		var closest = function closest(el, fn) {
			return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};

		// triggers when user clicks on thumbnail
		var onThumbnailsClick = function(e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false;

			var eTarget = e.target || e.srcElement;

			var clickedListItem = closest(eTarget, function(el) {
				return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
			});

			if(!clickedListItem) {
				return;
			}

			// find index of clicked item
			var clickedGallery = clickedListItem.parentNode,
				childNodes = clickedListItem.parentNode.childNodes,
				numChildNodes = childNodes.length,
				nodeIndex = 0,
				index;

			for (var i = 0; i < numChildNodes; i++) {
				if(childNodes[i].nodeType !== 1) { 
					continue; 
				}

				if(childNodes[i] === clickedListItem) {
					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}

			if(index >= 0) {
				openPhotoSwipe( index, clickedGallery );
			}
			return false;
		};

		// parse picture index and gallery index from URL (#&pid=1&gid=2)
		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
			params = {};

			if(hash.length < 5) {
				return params;
			}

			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');  
				if(pair.length < 2) {
					continue;
				}           
				params[pair[0]] = pair[1];
			}

			if(params.gid) {
				params.gid = parseInt(params.gid, 10);
			}

			if(!params.hasOwnProperty('pid')) {
				return params;
			}
			params.pid = parseInt(params.pid, 10);
			return params;
		};
		
		// opens photoswipe
		var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
			var pswpElement = document.querySelectorAll('.pswp')[0],
				gallery,
				options,
				items;

			items = parseThumbnailElements(galleryElement);

			// define options (if needed)
			options = {
				index: index,
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				getThumbBoundsFn: function(index) {
					// See Options -> getThumbBoundsFn section of docs for more info
					var thumbnail = items[index].el.getElementsByTagName('img')[0]; // find thumbnail
					if (!thumbnail)
						thumbnail = items[index].el.getElementsByTagName('video')[0];
					
					var pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						rect = thumbnail.getBoundingClientRect();

					return { x:rect.left, y:rect.top + pageYScroll, w:rect.width };
				},
				maxSpreadZoom: 4,
				getDoubleTapZoom: function(isMouseClick, item) {
					// isMouseClick          - true if mouse, false if double-tap
					// item                  - slide object that is zoomed, usually current
					// item.initialZoomLevel - initial scale ratio of image
					//                         e.g. if viewport is 700px and image is 1400px,
					//                              initialZoomLevel will be 0.5
					if(isMouseClick) {
						// is mouse click on image or zoom icon
						// zoom to original
						return 1;
						// e.g. for 1400px image:
						// 0.5 - zooms to 700px
						// 2   - zooms to 2800px
					} else {
						// is double-tap
						// zoom to original if initial zoom is less than 0.7x,
						// otherwise to 1.5x, to make sure that double-tap gesture always zooms image
						return item.initialZoomLevel < 0.7 ? 1 : 1.5;
					}
				}
			};

			if(disableAnimation) {
				options.showAnimationDuration = 0;
			}

			// Pass data to PhotoSwipe and initialize it
			gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};

		// loop through all gallery elements and bind events
		var galleryElements = document.querySelectorAll(gallerySelector);

		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i + 1);
			galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid > 0 && hashData.gid > 0) {
			openPhotoSwipe(hashData.pid - 1,  galleryElements[hashData.gid - 1], true);
		}
	};
		
	var linkFn = function(scope, elem, attr) {
		initPhotoSwipeFromDOM('#' + elem.attr('id'));
	};
	
	return {
        restrict: 'EA',
        replace: true,
		scope: {
            images: '=',
            width: '=',
			height: '=',
			template: '='
        },
        template: template,
		link: linkFn
    };
}]);

ngPhotoSwipe.directive('photoSlider', [ function () {
	var template = 
		'<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">' +
			'<div class="pswp__bg"></div>' +
			'<div class="pswp__scroll-wrap">' +
				'<div class="pswp__container">' +
					'<div class="pswp__item"></div>' +
					'<div class="pswp__item"></div>' +
					'<div class="pswp__item"></div>' +
				'</div>' +
				'<div class="pswp__ui pswp__ui--hidden">' +
					'<div class="pswp__top-bar">' +
						'<div class="pswp__counter"></div>' +
						'<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
						'<button class="pswp__button pswp__button--share" title="Share"></button>' +
						'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
						'<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
						'<div class="pswp__preloader">' +
							'<div class="pswp__preloader__icn">' +
							  '<div class="pswp__preloader__cut">' +
								'<div class="pswp__preloader__donut"></div>' +
							  '</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
						'<div class="pswp__share-tooltip"></div>' +
					'</div>' +
					'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">' +
					'</button>' +
					'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">' +
					'</button>' +
					'<div class="pswp__caption">' +
						'<div class="pswp__caption__center"></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	
	return {
        restrict: 'EA',
        replace: true,
        template: template
    };
}]);

ngPhotoSwipe.directive('photoGallery', [ function () {
	var template = 
		'<div class="row">' +
		'<figure class="col s4" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" ng-repeat="img in images">' +
			'<div class="image-content" ng-switch on="img.type">' +
				'<div ng-switch-when="video">' +
					'<a href="{{img.safeSrc}}" itemprop="contentUrl" data-size="{{img.size}}">' +
						'<video width="400" controls>' +
							'<source ng-src="{{img.safeSrc}}" type="video/mp4">' +
						'</video>' +
					'</a>' +
				'</div>' +
				'<div class="card" ng-switch-default><div class="card-image">' +
					'<a href="{{img.src}}" itemprop="contentUrl" data-size="{{img.size}}">' +
						'<img class="responsive-img" ng-src="{{img.thumb}}" itemprop="thumbnail" alt="{{img.caption}}" />' +
						'<!--<span class="navy card-title">Project Title</span>-->' +
					'</a>' +
				'</div>' +
				'<div class="card-content">' +
	              '<p class="flow-text">A short and sweet description of the project</p>' +
	            '</div>' +
	            '</div>' +				
			'</div>' +
		'</figure>' +
		'</div>';
			
	return {
        restrict: 'EA',
		scope: {
            images: '=',
            width: '=',
			height: '='
        },
        replace: true,
        template: template
    };
}]);
},{}],6:[function(require,module,exports){
require('./authentication');
require('./custom-photo-gallery.js');
},{"./authentication":4,"./custom-photo-gallery.js":5}],7:[function(require,module,exports){
require('./response-data');
require('./state-data');

},{"./response-data":8,"./state-data":9}],8:[function(require,module,exports){
angular.module('myapp')
.factory('ResponseData', function () {
    return {};
});

angular.module('myapp')
.factory('HomeData', function () {

	var contact = {
    		phone: '347-941-9392'
    	};

    function getContact() {
    	return contact;
    }

    return {
    	getContact: getContact
    };
});




},{}],9:[function(require,module,exports){
app.factory('StateData', function() {
	
	var current_state = 'who_we_are';

	function getCurrentState() {
		return current_state;
	}
	var publicAPI = {
		getCurrentState: getCurrentState
	};

	return publicAPI;
});
},{}],10:[function(require,module,exports){
require('./services');
require('./resources');
require('./factories');
require('./directives');
require('./controllers');

},{"./controllers":2,"./directives":6,"./factories":7,"./resources":11,"./services":15}],11:[function(require,module,exports){
require('./resources-config');
require('./site-resources');
},{"./resources-config":12,"./site-resources":13}],12:[function(require,module,exports){
angular.module('myapp').config(["$resourceProvider", function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
},{}],13:[function(require,module,exports){
/* angular.module('myapp').factory('Student', ['$resource', function($resource) {
    return $resource('/api/sis/students/:pk', {pk: '@pk'},
        {
            'list': {method: 'GET', isArray: true},
            'update': { method:'PUT' }
        });
    }
]);


angular.module('myapp').factory('Authentication', ['$resource', function($resource) {
    return $resource('/api-token-auth/', {},
        {
            'auth': { method:'POST' }
        });
    }
]);
*/
},{}],14:[function(require,module,exports){
/*global angular:true, browser:true */

/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 */
(function () {
  'use strict';

  angular.module('http-auth-interceptor', ['http-auth-interceptor-buffer'])

  .factory('authService', ['$rootScope','httpBuffer', function($rootScope, httpBuffer) {
    return {
      /**
       * Call this function to indicate that authentication was successfull and trigger a
       * retry of all deferred requests.
       * @param data an optional argument to pass on to $broadcast which may be useful for
       * example if you need to pass through details of the user that was logged in
       * @param configUpdater an optional transformation function that can modify the
       * requests that are retried after having logged in.  This can be used for example
       * to add an authentication token.  It must return the request.
       */
      loginConfirmed: function(data, configUpdater) {
        var updater = configUpdater || function(config) {return config;};
        $rootScope.$broadcast('event:auth-loginConfirmed', data);
        httpBuffer.retryAll(updater);
      },

      /**
       * Call this function to indicate that authentication should not proceed.
       * All deferred requests will be abandoned or rejected (if reason is provided).
       * @param data an optional argument to pass on to $broadcast.
       * @param reason if provided, the requests are rejected; abandoned otherwise.
       */
      loginCancelled: function(data, reason) {
        httpBuffer.rejectAll(reason);
        $rootScope.$broadcast('event:auth-loginCancelled', data);
      }
    };
  }])

  /**
   * $http interceptor.
   * On 401 response (without 'ignoreAuthModule' option) stores the request
   * and broadcasts 'event:auth-loginRequired'.
   * On 403 response (without 'ignoreAuthModule' option) discards the request
   * and broadcasts 'event:auth-forbidden'.
   */
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$rootScope', '$q', 'httpBuffer', function($rootScope, $q, httpBuffer) {
      return {
        responseError: function(rejection) {
          if ((rejection.status === 401 || rejection.status === 403) && !rejection.config.ignoreAuthModule) {
            var deferred = $q.defer();
            httpBuffer.append(rejection.config, deferred);
            $rootScope.$broadcast('event:auth-loginRequired', rejection);
            return deferred.promise;
            //switch (rejection.status) {
            //  case 403:
            //    var deferred = $q.defer();
            //    httpBuffer.append(rejection.config, deferred);
            //    $rootScope.$broadcast('event:auth-loginRequired', rejection);
            //    return deferred.promise;
            //  case 403:
            //    $rootScope.$broadcast('event:auth-forbidden', rejection);
            //    break;
            //}
          }
          // otherwise, default behaviour
          return $q.reject(rejection);
        }
      };
    }]);
  }]);

  /**
   * Private module, a utility, required internally by 'http-auth-interceptor'.
   */
  angular.module('http-auth-interceptor-buffer', [])

  .factory('httpBuffer', ['$injector', function($injector) {
    /** Holds all the requests, so they can be re-requested in future. */
    var buffer = [];

    /** Service initialized later because of circular dependency problem. */
    var $http;

    function retryHttpRequest(config, deferred) {
      function successCallback(response) {
        deferred.resolve(response);
      }
      function errorCallback(response) {
        deferred.reject(response);
      }
      $http = $http || $injector.get('$http');
      $http(config).then(successCallback, errorCallback);
    }

    return {
      /**
       * Appends HTTP request configuration object with deferred response attached to buffer.
       */
      append: function(config, deferred) {
        buffer.push({
          config: config,
          deferred: deferred
        });
      },

      /**
       * Abandon or reject (if reason provided) all the buffered requests.
       */
      rejectAll: function(reason) {
        if (reason) {
          for (var i = 0; i < buffer.length; ++i) {
            buffer[i].deferred.reject(reason);
          }
        }
        buffer = [];
      },

      /**
       * Retries all the buffered requests clears the buffer.
       */
      retryAll: function(updater) {
        for (var i = 0; i < buffer.length; ++i) {
          retryHttpRequest(updater(buffer[i].config), buffer[i].deferred);
        }
        buffer = [];
      }
    };
  }]);
})();

},{}],15:[function(require,module,exports){
require('./http-auth-interceptor');

},{"./http-auth-interceptor":14}],16:[function(require,module,exports){
app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home/');
    
    $stateProvider
        
        .state('home', {
            name: 'home',
            url: '/home/',
            templateUrl: 'templates/home/home.html',
            controller: 'HomeController'
        })       
}]);

require('./dashboard');


},{"./dashboard":10}]},{},[16]);

//# sourceMappingURL=maps/app.js.map