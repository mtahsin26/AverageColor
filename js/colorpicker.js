  var sumR = 0;
  var sumG = 0;
  var sumB = 0;
  var total = 0;

  function color(){

      var r = $('#red').slider("value"); 
      var g = $('#green').slider("value");
      var b = $('#blue').slider("value");

      //console.log("rgb("+r + "," + g + "," + b+")" );

      $("#swatch").css('background-color', 'rgb(' +r+','+g+','+b+')');

  }

	$(document).ready(function(){
    //slider
    $( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 0,
        slide: color,
        change: color
        
      });

    $('#clearAll').on('click', function(){
      
      //$('#average').css('background-color', 'rgb(' +r+','+g+','+b+')');
      sumR = 0;
      sumG = 0;
      sumB = 0;

      total = 1;
      $('#average').css('background-color', 'rgb(' + Math.round(sumR/total)+','+ Math.round(sumG/total)+','+ Math.round(sumB/total)+')');
      $('#myColors').empty();
      $('#avgContainer h2').html('Average Color: rgb(0,0,0)');
    });


		$('#mybutton').on('click', function(){

			var r = $('#red').slider("value"); 
      var g = $('#green').slider("value");
      var b = $('#blue').slider("value");
			// console.log("rgb("+r + "," + g + "," + b+")" );

			// $("#square").css('background-color', 'rgb(' +r+','+g+','+b+')');

      d = document.createElement('div');

      $(d).css('background-color', 'rgb(' +r+','+g+','+b+')')
      .html('rgb(' +r+','+g+','+b+')' + ' - Click to remove')
      .click(function(){
        sumR -= $(this).data('rgb').red
        sumG -= $(this).data('rgb').green
        sumB -= $(this).data('rgb').blue



        $(this).slideToggle('slow', function(){
          $(this).remove();

            total = $('#myColors div').length;
          
            if (total == 0) {
              $('#average').css('background-color', 'rgb(0,0,0)');
              $('#avgContainer h2').html('Average Color: rgb(0,0,0)');

              //console.log('HELLO');
            }else{
              //console.log("REMOVED: " + sumR + "|" + sumG +"|" + sumB);
              //console.log("Total divs: " + total);
              $('#average').css('background-color', 'rgb(' + Math.round(sumR/total)+','+ Math.round(sumG/total)+','+ Math.round(sumB/total)+')');
            }
        }); 
      })
      .addClass('rgbColor')
      .prependTo('#myColors')
      .hide()
      .slideToggle(300)
      .data('rgb',{red:r, green:g, blue:b});

      //console.log('COLOR' + $(d).data('rgb').red + $(d).data('rgb').green + $(d).data('rgb').blue);

      //console.log("Average: " + $('#myColors div').length);


      // Change and show average color
      total = $('#myColors div').length;
      sumR += parseInt(r);
      sumG += parseInt(g);
      sumB += parseInt(b);
      // console.log('SUM TOTALS' + sumR + " " + sumB + " " + sumG );
      // console.log('SUM AVERAGE' + sumR/total + " " + sumB/total + " " + sumG/total );
      $('#avgContainer h2').html('Average Color: rgb(' + Math.round(sumR/total)+','+ Math.round(sumG/total)+','+ Math.round(sumB/total)+')')
      $('#average').css('background-color', 'rgb(' + Math.round(sumR/total)+','+ Math.round(sumG/total)+','+ Math.round(sumB/total)+')');

		});

	});