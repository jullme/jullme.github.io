TweenMax.fromTo($('.sea-1'), 2, {width:555,ease: Power0.easeNone},{width:322,ease: Power0.easeNone,repeat: -1,yoyo: true});
TweenMax.fromTo($('.sea-2'), 2, {width:500,ease: Power0.easeNone},{width:400,ease: Power0.easeNone,repeat: -1,yoyo: true});
TweenMax.fromTo($('.sea-3'), 2, {width:460,ease: Power0.easeNone},{width:389,ease: Power0.easeNone,repeat: -1,yoyo: true});
TweenMax.to($('.cloud'), 10, {left:300,ease: Power0.easeNone,repeat: -1});
TweenMax.to($('.cloud-2'), 20, {left:900,ease: Power0.easeNone,repeat: -1});
TweenMax.to($('.submarine'), 5, {top:100,ease: Bounce.easeOut, delay:3});
TweenMax.to($('.sale'), 2, {opacity:1, delay:8});