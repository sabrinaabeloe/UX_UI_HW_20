$('.usda').hover(
    function(){
        // CHANGES THE BACKGROUND COLOR
        $(this).css('background-color', '#c8b2e4e8')
        // A POINTER CURSOR LETS THE USER KNOW THAT THIS IS A CLICKABLE ELEMENT 
        $(this).css('cursor', 'pointer')
    }, function() {
        // RETURNS COLOR BACK TO NORMAL AFTER MOUSE IS NO LONGER HOVERING 
        $(this).css('background-color', '')
    });
    $('.gsoc').hover(
        function(){
            // CHANGES THE BACKGROUND COLOR
            $(this).css('background-color', '#c8b2e4e8')
            // A POINTER CURSOR LETS THE USER KNOW THAT THIS IS A CLICKABLE ELEMENT 
            $(this).css('cursor', 'pointer')
        }, function() {
            // RETURNS COLOR BACK TO NORMAL AFTER MOUSE IS NO LONGER HOVERING 
            $(this).css('background-color', '')
        });
$('#work').hover(
    function(){
        $(this).css('font-weight','bold')
        $(this).css('cursor','pointer')
    }, function() {
        $(this).css('font-weight','')
    });
    $('#contact').hover(
        function(){
            $(this).css('font-weight','bold')
            $(this).css('cursor','pointer')
        }, function() {
            $(this).css('font-weight','')
        });
        $('#skills').hover(
            function(){
                $(this).css('font-weight','bold')
                $(this).css('cursor','pointer')
            }, function() {
                $(this).css('font-weight','')
            });
            $('#about').hover(
                function(){
                    $(this).css('font-weight','bold')
                    $(this).css('cursor','pointer')
                }, function() {
                    $(this).css('font-weight','')
                });
                const sr = ScrollReveal({
                    origin: 'top',
                    distance: '80px',
                    duration: 2000,
                    reset: true});

                    sr.reveal('.logo',{}); 
sr.reveal('.nav',{delay: 200}); 
sr.reveal('.heroImg',{delay: 400}); 
sr.reveal('.mySkills',{ interval: 200});
sr.reveal('.workGrid',{delay:200}); 
sr.reveal('.allProjects',{delay:200});
sr.reveal('.footer',{delay:200});
     // end document.ready function - all jquery code goes above this line