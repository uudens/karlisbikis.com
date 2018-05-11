/* PhotoSwipe needs deprecated $.fn.live so put it back in jQuery */
(function () {
  'use strict';

  $.fn.extend({
    live: function () {
      return $.fn.on.apply(this, arguments);
    }
  });

})();



/* Site code */
(function () {
  'use strict';

  $(function () {
    // Init PhotoSwipe
    $('.project li:not(.text) a').photoSwipe();


    // Simple email obfuscation
    $('a.direct').click(function (e) {
      e.preventDefault();
      var eq = function(s) { return s; };
      window.location.href = eq('mai') + 'lto:' + eq('ka') + 'rlis.b' + eq('iki') + 's@g' + eq('ma') + 'il.' + eq('com');
    });


    // Make sure project title cell is clickable even if it contains other links inside
    $('.project li.text:not(.without-external-link)')
      .filter(function () {
        // We are interested in cells that don't have .main link as the direct child since this case is handled by browser by default
        return !$(this).children('.main').length;
      })
      .click(function (e) {
        // Only continue if target is not a link tag
        if ($(e.target).is('a')) { return; }

        // Open URL of .main link
        window.open($(e.currentTarget).find('a.main').attr('href'), '_blank').focus();
      });

    // Hide floating message on scroll
    if (!localStorage.hasSeenScrollMessage) {
      $('.projects > li').scroll(function (e) {
        $('.floating-message').addClass('hidden');
        localStorage.setItem('hasSeenScrollMessage', true);
      });

      // Hide floating message if screen is wide enough and we don't have scrollbars
      // Find project with most children
      var largestProject = $('.projects > li').get().reduce(function (memo, current) {
        return $(memo).find('li').length > $(current).find('li').length ? memo : current;
      });
      // Hide message if needed
      $('.floating-message').toggleClass('hidden', largestProject.clientWidth >= largestProject.scrollWidth);
    }

  });
})();
