$(function() {
  var key_sounds = {
    'c1': new Howl({urls: ['sounds/c1.mp3']}),
    'c1s': new Howl({urls: ['sounds/c1s.mp3']}),
    'd1': new Howl({urls: ['sounds/d1.mp3']}),
    'd1s': new Howl({urls: ['sounds/d1s.mp3']}),
    'e1': new Howl({urls: ['sounds/e1.mp3']}),
    'f1': new Howl({urls: ['sounds/f1.mp3']}),
    'f1s': new Howl({urls: ['sounds/f1s.mp3']}),
    'g1': new Howl({urls: ['sounds/g1.mp3']}),
    'g1s': new Howl({urls: ['sounds/g1s.mp3']}),
    'a2': new Howl({urls: ['sounds/a2.mp3']}),
    'a2s': new Howl({urls: ['sounds/a2s.mp3']}),
    'b2': new Howl({urls: ['sounds/b2.mp3']}),
    'c2': new Howl({urls: ['sounds/c2.mp3']}),
    'c2s': new Howl({urls: ['sounds/c2s.mp3']}),
    'd2': new Howl({urls: ['sounds/d2.mp3']}),
    'd2s': new Howl({urls: ['sounds/d2s.mp3']}),
    'e2': new Howl({urls: ['sounds/e2.mp3']}),
    'f2': new Howl({urls: ['sounds/f2.mp3']}),
    'f2s': new Howl({urls: ['sounds/f2s.mp3']}),
    'g2': new Howl({urls: ['sounds/g2.mp3']})
  };
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

  // mouse clicks on keys
  $('.key-white, .key-black').mousedown(function() {
    console.log($(this).attr('id'));
    key_sounds[$(this).attr('id')].play();
  });

  // keyboard playing
  $(document).on('keyup keydown', function(e) {
    console.log(e.which);
    var note = "";
    var c = String.fromCharCode(e.which).toLowerCase();
    console.log(c);
    switch(c) {
      case 'a':
        note = "c1";
        break;
      case 'w':
        note = "c1s";
        break;
      case 's':
        note = "d1";
        break;
      case 'e':
        note = "d1s";
        break;
      case 'd':
        note = "e1";
        break;
      case 'f':
        note = "f1";
        break;
      case 't':
        note = "f1s";
        break;
      case 'g':
        note = "g1";
        break;
      case 'y':
        note = "g1s";
        break;
      case 'h':
        note = "a2";
        break;
      case 'u':
        note = "a2s";
        break;
      case 'j':
        note = "b2";
        break;
      case 'k':
        note = "c2";
        break;
      case 'o':
        note = "c2s";
        break;
      case 'l':
        note = "d2";
        break;
      case 'p':
        note = "d2s";
        break;
      case ';':
        note = "e2";
        break;
      case '\'':
        note = "f2";
        break;
      case ']':
        note = "f2s";
        break;
    }
    console.log(note);
    if (note != "") {
      if (e.type == 'keydown') {
        key_sounds[note].play();  
        $("#" + note).addClass('active');
      } else {
        $("#" + note).removeClass('active');
      }
      
    };
    
  });
});
