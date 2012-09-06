(function($){
  var ranges = {
    'spinjs_lines': [5,17],
    'spinjs_length': [0,30],
    'spinjs_width': [2,20],
    'spinjs_radius': [0,40],
    'spinjs_corners': [0.0 , 1.0],
    'spinjs_rotate': [0,90],
    'spinjs_trail': [0,100],
    'spinjs_speed': [0.5,2.2]
  };
  Drupal.behaviors.spins_admin = {
    attach: function(context, settings) {
      /*
       * attach sliders
       */
      $('input.slider').each(function(){
        $slider = $('<div></div>');
        $slider.appendTo($(this).parent());
        var step = 1;
        if (this.name === 'spinjs_corners' || this.name === 'spinjs_speed') {
          step = 0.01
        }
        $slider.slider({
          min: ranges[this.name][0],
          max: ranges[this.name][1],
          step: step,
          value: $(this).val(),
          slide: function(event, slider) {
            $(this).parent().find('input').val(slider.value);
          }
        });
      });
      /*
       * attach farbtastic
       */
      $('input.color').each(function(){

      });
    }
  };
}(jQuery));