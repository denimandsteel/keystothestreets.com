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
    key_sounds[$(this).attr('id')].play();
    fireANote();
  });

  // keyboard playing
  $(document).on('keyup keydown', function(e) {
    var note = "";
    switch(e.which) {
      case 81:
        note = "c1";
        break;
      case 50:
        note = "c1s";
        break;
      case 87:
        note = "d1";
        break;
      case 51:
        note = "d1s";
        break;
      case 69:
        note = "e1";
        break;
      case 82:
        note = "f1";
        break;
      case 53:
        note = "f1s";
        break;
      case 84:
        note = "g1";
        break;
      case 54:
        note = "g1s";
        break;
      case 89:
        note = "a2";
        break;
      case 55:
        note = "a2s";
        break;
      case 85:
        note = "b2";
        break;
      case 73:
        note = "c2";
        break;
      case 57:
        note = "c2s";
        break;
      case 79:
        note = "d2";
        break;
      case 48:
        note = "d2s";
        break;
      case 80:
        note = "e2";
        break;
      case 219:
        note = "f2";
        break;
      case 187:
        note = "f2s";
        break;
      case 221:
        note = "g2";
        break;
    }
    if (note != "" && $(e.target).attr('type') !== 'email') {
      if (e.type == 'keydown') {
        key_sounds[note].play();
        fireANote();
        $("#" + note).addClass('active');
      } else {
        $("#" + note).removeClass('active');
      }

    };

  });

  $('.button').click(function() {
    key_sounds['c2'].play();
  });

  if (location.hash !== '') {
    setTimeout(function() {
      location.hash.replace('#', '').split(',').forEach(function(step, i) {
        setTimeout(function() {
          step.split('-').forEach(function(note) {
            key_sounds[note].play();
            fireANote();
            $("#" + note).addClass('active');
            setTimeout(function() {
              $("#" + note).removeClass('active');
            }, 250);
          });
        }, i * 500);
      });
    }, 2000);
  }

  var pianos = [
    'canada-place',
    // 'cambie-bridge',
    'strathcona',
    'chinatown',
  ];
  var index = 0;

  $('.previous').click(function() {
    index = ( index + pianos.length - 1 ) % pianos.length;
    $('.pianos').attr('class', 'pianos').addClass(pianos[index % pianos.length]);
  });
  $('.next').click(function() {
    index = ( index + 1 ) % pianos.length;
    $('.pianos').attr('class', 'pianos').addClass(pianos[index % pianos.length]);
  });

  $(".keyboard").click(function() {
    $(".keys").toggleClass('show-hints');
  });
});
