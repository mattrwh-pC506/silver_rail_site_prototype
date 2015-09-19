(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/card_info.html',
    '<div class="col s12 center-align"><div class="row"><div class="gmap valign-wrapper">\n' +
    '<div class="gmap-spinner preloader-wrapper big active valign-center center-align">\n' +
    '  <div class="spinner-layer spinner-blue">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-red">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-yellow">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-green">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div style="width:600px;max-width:100%;overflow:hidden;height:500px;color:red;"><div id="my-map-display" style="height:500px;width:600px;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=32+EAST+31ST+STREET+NEW+YORK,+NY+10016&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="google-map-code" href="https://www.tubeembed.com/" id="auth-maps-data">embed youtube</a><style>#my-map-display img{max-width:none!important;background:none!important;font-size: inherit;}</style></div>\n' +
    '</div></div><div class="row"><h1><i class="medium material-icons">phone</i><span>212-285-9500</span></h1></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/contact_us.html',
    '<div class="col s12"><h3>CONTACT US</h3><div class="col s12 center-align"><div class="row"><div class="gmap valign-wrapper">\n' +
    '<div class="gmap-spinner preloader-wrapper big active valign-center center-align">\n' +
    '  <div class="spinner-layer spinner-blue">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-red">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-yellow">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-green">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div style="width:600px;max-width:100%;overflow:hidden;height:500px;color:red;"><div id="my-map-display" style="height:500px;width:600px;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=32+EAST+31ST+STREET+NEW+YORK,+NY+10016&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="google-map-code" href="https://www.tubeembed.com/" id="auth-maps-data">embed youtube</a><style>#my-map-display img{max-width:none!important;background:none!important;font-size: inherit;}</style></div>\n' +
    '</div></div><div class="row"><h1><i class="medium material-icons">phone</i><span>212-285-9500</span></h1></div></div><h3>Call today for a quote!</h3></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/home.html',
    '<div class="row"><div class="parallax-container"><div parallax="parallax" height="600"><img width="100%" src="http://www.arober.com/wp-content/uploads/2015/05/awesome-luxury-manhattan-penthouse-apartments-with-large-living-room-for-sale-960x540.jpg" class="landing-image"/></div></div></div><div id="who_we_are" class="row first_box"><div class="container"><h3>WHO WE ARE</h3><p class="flow-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></div></div><div class="row"><div class="parallax-container"><div parallax="parallax" height="600"><img width="100%" src="http://www.blogcdn.com/slideshows/images/slides/244/621/7/S2446217/slug/l/dbox-related-one-madison-triplex-living-1.jpg" class="landing-image"/></div></div></div><div id="our_team" class="row"><div class="container"><h3>OUR TEAM</h3><div class="row"><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img responsive-img"></div></div><div class="col s10"> <h5>Employee #1</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #2</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #3</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #4</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #5</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #6</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #7</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #8</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #9</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div></div></div></div><div class="row"><div class="parallax-container"><div parallax="parallax" height="600"><img width="100%" src="http://www.arober.com/wp-content/uploads/2015/05/exclusive-manhattan-penthouse-apartments-interior-with-cool-design-and-expensive-furniture-960x640.jpg" class="landing-image"/></div></div></div><div id="projects" class="row"><div class="container"><div class="col s12"><div class="image-thumbs"><h2>Project Gallery:</h2><div id="photoswipe" photo-swipe="photo-swipe" images="images"></div></div><div photo-slider="photo-slider"></div></div></div></div><div class="row"><div class="parallax-container"><div parallax="parallax" height="600"><img width="100%" src="http://www.arober.com/wp-content/uploads/2015/05/glamorous-penthouse-designs-for-sale-in-new-york-city-with-expensive-furniture-interior-960x642.jpg" class="landing-image"/></div></div></div><div id="contact_us" class="row"><div class="col s12"><h3>CONTACT US</h3><div class="col s12 center-align"><div class="row"><div class="gmap valign-wrapper">\n' +
    '<div class="gmap-spinner preloader-wrapper big active valign-center center-align">\n' +
    '  <div class="spinner-layer spinner-blue">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-red">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-yellow">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="spinner-layer spinner-green">\n' +
    '    <div class="circle-clipper left">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="gap-patch">\n' +
    '      <div class="circle"></div>\n' +
    '    </div><div class="circle-clipper right">\n' +
    '      <div class="circle"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div style="width:600px;max-width:100%;overflow:hidden;height:500px;color:red;"><div id="my-map-display" style="height:500px;width:600px;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=32+EAST+31ST+STREET+NEW+YORK,+NY+10016&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="google-map-code" href="https://www.tubeembed.com/" id="auth-maps-data">embed youtube</a><style>#my-map-display img{max-width:none!important;background:none!important;font-size: inherit;}</style></div>\n' +
    '</div></div><div class="row"><h1><i class="medium material-icons">phone</i><span>212-285-9500</span></h1></div></div><h3>Call today for a quote!</h3></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/our_team.html',
    '<div class="container"><h3>OUR TEAM</h3><div class="row"><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img responsive-img"></div></div><div class="col s10"> <h5>Employee #1</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #2</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TDoDagbEShcwH2ODMcWCe7habqOPXiNCEa-Mmwv3X-thEzeU" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #3</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #4</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #5</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #6</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #7</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #8</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div><div class="col s4"><div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper"><div class="col s2"><div src="" alt="" class="img circle responsive-img"></div></div><div class="col s10"> <h5>Employee #9</h5><h5>Job Title</h5><h5>Bio/Job Description</h5></div></div></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/projects.html',
    '<div class="container"><div class="col s12"><div class="image-thumbs"><h2>Project Gallery:</h2><div id="photoswipe" photo-swipe="photo-swipe" images="images"></div></div><div photo-slider="photo-slider"></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/home/who_we_are.html',
    '<div class="container"><h3>WHO WE ARE</h3><p class="flow-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></div>');
}]);
})();
