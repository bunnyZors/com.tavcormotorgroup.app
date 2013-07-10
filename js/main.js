document.addEventListener('deviceready', function(){
	
	var home = 
			'<div id="home" class="page">' +	
							
					'<div class="large-btn">' +
						'<a class="button" data-path="vehicle_search" href="#vehicle_search">' +
							'<img alt="Vehicle Search" src="img/vehicle-search.jpg"/>' +
							'<span class="btn-title">Vehicle Search</span>' +
						'</a>' +
					'</div>' +
					
					'<div class="regular-btn fl">' +
						'<a class="button" data-path="services" href="#services">' +
							'<img alt="Services" src="img/services.jpg"/>' +
							'<span class="btn-title">Services</span>' +
						'</a>' +
					'</div>' +
					
					'<div class="regular-btn fr">' +
						'<a class="button" data-path="contact" href="#contact">' +
							'<img alt="Contact" src="img/contact.jpg"/>' +
							'<span class="btn-title">Contact</span>' +
						'</a>' +
					'</div>' +
					
					'<div class="regular-btn fl">' +
						'<a class="button" data-path="specials" href="#specials">' +
							'<img alt="Specials" src="img/specials.jpg"/>' +
							'<span class="btn-title">Specials</span>' +
						'</a>' +
					'</div>' +
					
					'<div class="regular-btn fr">' +
						'<a class="button" data-path="more" href="#more">' +
							'<img alt="More" src="img/blue.jpg"/>' +							
							'<span class="btn-title">More...</span>' +
						'</a>' +
					'</div>' +
					
				'</div>';
	
	var vehicle_search = 
		'<div id="vehicle-search" class="page">' +
			'<p>The Vehicle Search Will Come Here...</p>' +
		'</div>';
		
	var services = 
		'<div id="services" class="page">' +
			'<p>The Book A Service Will Come Here...</p>' +
		'</div>';
		
	var contact = 
		'<div id="contact" class="page">' +
			'<p>The Contacts Will Come Here...</p>' +
		'</div>';
		
	var specials = 
		'<div id="specials" class="page">' +
			'<p>The Specials Will Come Here...</p>' +
		'</div>';
		
	var more = 
		'<div id="more" class="page">' +
			'<p>More Stuff Will Come Here...</p>' +
		'</div>';
	
	window.addEventListener('load', function () {
	    new FastClick(document.body);
	}, false);
	
	var slider = new PageSlider(jQuery("#container"));
	jQuery(window).on('hashchange', route);
	
	function route(event) {
    	var page,
        	hash = window.location.hash;
        
        if(hash === '#home'){
        	page = home;
        }else if(hash === '#vehicle_search'){
        	page = vehicle_search;
        }else if(hash === '#services'){
        	page = services;
        }else if(hash === '#contact'){
        	page = contact;
        }else if(hash === '#specials'){
        	page = specials;        
        }else if(hash === '#more'){
        	page = more;        
        }else{
        	page = home;
        }     	
        slider.slidePage( jQuery(page) );
    }
    
    route();
    
    document.addEventListener("backbutton", function(){
    	var hash = window.location.hash;
    	
    	window.location.hash = '#home';    	
    	
    }, false);
				
});
