<script>
(function() {
  var pageWrapOne = document.getElementById( 'pagewrap-one' ),
    pageWrapTwo = document.getElementById( 'pagewrap-two' ),
    pagesOne = [].slice.call( pageWrapOne.querySelectorAll( 'div.container-inner' ) ),
    pagesTwo = [].slice.call( pageWrapTwo.querySelectorAll( 'div.container-inner' ) ),
    currentPageOne = 0,
    currentPageTwo = 0,
    triggerLoadingOne = [].slice.call( pageWrapOne.querySelectorAll( 'a.pageload-link' ) ),
    triggerLoadingTwo = [].slice.call( pageWrapTwo.querySelectorAll( 'a.pageload-link' ) ),
    loaderOne = new SVGLoader( document.getElementById( 'loader-one' ), { speedIn : 800, easingIn : mina.easeinout } ),
    loaderTwo = new SVGLoader( document.getElementById( 'loader-two' ), { speedIn : 800, easingIn : mina.easeinout } ),
    pageWrapThree = document.getElementById( 'pagewrap-three' ),
    pageWrapFour = document.getElementById( 'pagewrap-four' ),
    pagesThree = [].slice.call( pageWrapThree.querySelectorAll( 'div.container-inner' ) ),
    pagesFour = [].slice.call( pageWrapFour.querySelectorAll( 'div.container-inner' ) ),
    currentPageThree = 0,
    currentPageFour = 0,
    triggerLoadingThree = [].slice.call( pageWrapThree.querySelectorAll( 'a.pageload-link' ) ),
    triggerLoadingFour = [].slice.call( pageWrapFour.querySelectorAll( 'a.pageload-link' ) ),
    loaderThree = new SVGLoader( document.getElementById( 'loader-three' ), { speedIn : 800, easingIn : mina.easeinout } ),
    loaderFour = new SVGLoader( document.getElementById( 'loader-four' ), { speedIn : 800, easingIn : mina.easeinout } ),
    pageWrapFive = document.getElementById( 'pagewrap-five' ),
    pagesFive = [].slice.call( pageWrapFive.querySelectorAll( 'div.container-inner' ) ),
    currentPageFive = 0,
    triggerLoadingFive = [].slice.call( pageWrapFive.querySelectorAll( 'a.pageload-link' ) ),
    loaderFive = new SVGLoader( document.getElementById( 'loader-five' ), { speedIn : 800, easingIn : mina.easeinout } );

  function init() {
    triggerLoadingOne.forEach( function( trigger ) {
      trigger.addEventListener( 'mouseover', function( ev ) {
        ev.preventDefault();
        loaderOne.show();
        // after some time hide loader
        setTimeout( function() {
          loaderOne.hide();

          classie.removeClass( pagesOne[ currentPageOne ], 'show' );
          // update..
          currentPageOne = currentPageOne ? 0 : 1;
          classie.addClass( pagesOne[ currentPageOne ], 'show' );

        }, 1000 );
      } );
    } );
    triggerLoadingTwo.forEach( function( trigger ) {
      trigger.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        loaderTwo.show();
        // after some time hide loader
        setTimeout( function() {
          loaderTwo.hide();

          classie.removeClass( pagesTwo[ currentPageTwo ], 'show' );
          // update..
          currentPageTwo = currentPageTwo ? 0 : 1;
          classie.addClass( pagesTwo[ currentPageTwo ], 'show' );

        }, 1000 );
      } );
    } );
    triggerLoadingThree.forEach( function( trigger ) {
      trigger.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        loaderThree.show();
        // after some time hide loader
        setTimeout( function() {
          loaderThree.hide();

          classie.removeClass( pagesThree[ currentPageThree ], 'show' );
          // update..
          currentPageThree = currentPageThree ? 0 : 1;
          classie.addClass( pagesThree[ currentPageThree ], 'show' );

        }, 1000 );
      } );
    } );
    triggerLoadingFour.forEach( function( trigger ) {
      trigger.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        loaderFour.show();
        // after some time hide loader
        setTimeout( function() {
          loaderFour.hide();

          classie.removeClass( pagesFour[ currentPageFour ], 'show' );
          // update..
          currentPageFour = currentPageFour ? 0 : 1;
          classie.addClass( pagesFour[ currentPageFour ], 'show' );

        }, 1000 );
      } );
    } );
    triggerLoadingFive.forEach( function( trigger ) {
      trigger.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        loaderFive.show();
        // after some time hide loader
        setTimeout( function() {
          loaderFive.hide();

          classie.removeClass( pagesFive[ currentPageFive ], 'show' );
          // update..
          currentPageFive = currentPageFive ? 0 : 1;
          classie.addClass( pagesFive[ currentPageFive ], 'show' );

        }, 1000 );
      } );
    } );
  }

  init();
})();
</script>
