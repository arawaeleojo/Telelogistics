        // Preloader
        $(window).on('load', function () {
            $('.preloader').fadeOut('slow');
        });
        
// Navbar Scroll Effect
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }

            // Back to Top Button
            if ($(this).scrollTop() > 300) {
                $('#backToTop').addClass('active');
            } else {
                $('#backToTop').removeClass('active');
            }
        });

        // Smooth Scrolling
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();

            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top - 80,
                },
                100,
                'linear'
            );
        });

        // Back to Top Button
        $('#backToTop').click(function () {
             $('html, body').animate({ scrollTop: 0 }, 400);
            return false;
        });

        // Form Submission
        $('#contactForm').submit(function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Active nav link on scroll
        $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop() + 100;

        // $('section').each(function () {
        //     if ($(this).position().top <= scrollDistance) {
        //         var id = $(this).attr('id'); // get section id
        //         $('.navbar-nav a').removeClass('active');
        //         $('.navbar-nav a[href="#' + id + '"]').addClass('active');
        //     }
        // });
        }).scroll();
