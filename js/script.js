$(function() {
  $('[data-embed]').click(function() {
    var $this = $(this);
    if ($this.data('provider') === 'vimeo') {
      var $player = $('<iframe src="https://player.vimeo.com/video/' + $this.data('embed') + '?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    }
    else {
      var $player = $('<iframe src="http://www.youtube.com/embed/' + $this.data('embed') + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }
    $('.player iframe').replaceWith($player);
    $('[data-embed]').removeClass('active');
    $this.addClass('active');
    return false;
  });
});
