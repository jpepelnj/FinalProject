		$(window).on('load resize', function(){
          console.log('Width: ' + $(window).width() );
        });
        
		$(document).on('click', '#togglebold', function(e){
			$('#bold2').toggleClass('bold');
			});
		
		$(document).on('click', "img", function(f){
        console.log('alt: '+ $(this).attr('alt'));
        console.log('width: ' + $(this).width());
        console.log('height: '+  $(this).height());
		});

		$(document).on('click', "h1,h2,h3,h4,h5,h6", function(f){
        console.log('Text: ' + $(this).text());
        console.log('Color: '+ $(this).css('color'));
        console.log('Font-size: '+ $(this).css('font-size'));
		});

		$(document).on('click', function(f){
        $('#navigation').slideToggle();
});