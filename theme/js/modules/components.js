materialAdmin

    // =========================================================================
    // WEATHER WIDGET
    // =========================================================================

    .directive('weatherWidget', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                $.simpleWeather({
                    location: 'Austin, TX',
                    woeid: '',
                    unit: 'f',
                    success: function(weather) {
                        html = '<div class="weather-status">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
                        html += '<ul class="weather-info"><li>'+weather.city+', '+weather.region+'</li>';
                        html += '<li class="currently">'+weather.currently+'</li></ul>';
                        html += '<div class="weather-icon wi-'+weather.code+'"></div>';
                        html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[1].high+'/'+weather.forecast[1].low+'</span><span>'+weather.forecast[1].text+'</span>';
                        html += '</div>';
                        html += '<div class="weather-list after-tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[2].high+'/'+weather.forecast[2].low+'</span><span>'+weather.forecast[2].text+'</span>';
                        html += '</div></div>';
                        $("#weather-widget").html(html);
                    },
                    error: function(error) {
                        $("#weather-widget").html('<p>'+error+'</p>');
                    }
                });
            }
        }
        
    })



    // =========================================================================
    // SWEATALERT
    // =========================================================================

    //Basic
    .directive('swalBasic', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!");
                });
            }
        }
    })
    
    //A title with a text under
    .directive('swalText', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")

                });
            }
        }
    })

    //Success Message
    .directive('swalSuccess', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")

                });
            }
        }
    })

    //Warning Message
    .directive('swalWarning', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
                    });
                });
            }
        }
    })

    //Parameter
    .directive('swalParams', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        cancelButtonText: "No, cancel plx!",   
                        closeOnConfirm: false,   
                        closeOnCancel: false 
                    }, function(isConfirm){   
                        if (isConfirm) {     
                            swal("Deleted!", "Your imaginary file has been deleted.", "success");   
                        } else {     
                            swal("Cancelled", "Your imaginary file is safe :)", "error");   
                        } 
                    });
                });
            }
        }
    })

    //Custom Image
    .directive('swalImg', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Sweet!",   
                        text: "Here's a custom image.",   
                        imageUrl: "img/thumbs-up.png" 
                    });
                });
            }
        }
    })
            
    //Auto Close Timer
    .directive('swalTimer', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                     swal({   
                        title: "Auto close alert!",   
                        text: "I will close in 2 seconds.",   
                        timer: 2000,   
                        showConfirmButton: false 
                    });
                });
            }
        }
    })

    

    // =========================================================================
    // GROWL
    // =========================================================================

    .directive('growlDemo', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                function notify(from, align, icon, type, animIn, animOut){
                    $.notify({
                        icon: icon,
                        title: ' Bootstrap Growl ',
                        message: 'Turning standard Bootstrap alerts into awesome notifications',
                        url: ''
                    },{
                            element: 'body',
                            type: type,
                            allow_dismiss: true,
                            placement: {
                                    from: from,
                                    align: align
                            },
                            offset: {
                                x: 20,
                                y: 85
                            },
                            spacing: 10,
                            z_index: 1031,
                            delay: 25000,
                            timer: 1000,
                            url_target: '_blank',
                            mouse_over: false,
                            animate: {
                                    enter: animIn,
                                    exit: animOut
                            },
                            icon_type: 'class',
                            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<strong class="text-strong" data-notify="title">{1}</strong><br>' +
		'<span data-notify="message">{2}</span>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
                    });
                }
                
                element.on('click', function(e){
                    e.preventDefault();
                    
                    var nFrom = attrs.from;
                    var nAlign = attrs.align;
                    var nIcons = attrs.icon;
                    var nType = attrs.type;
                    var nAnimIn = attrs.animationIn;
                    var nAnimOut = attrs.animationOut;

                    notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
            
                })
                
                
            }
        }
    })

