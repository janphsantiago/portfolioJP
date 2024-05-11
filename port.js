window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        
        // Get all the sections
        let sections = document.querySelectorAll('section');

        sections.forEach(function(currentSection) {
            let sectionTop = currentSection.offsetTop - 50;
            let sectionHeight = currentSection.offsetHeight;
            let sectionId = currentSection.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Add 'active' class to the corresponding navigation link
                document.querySelector('nav ul li a[href="#' + sectionId + '"]').classList.add('active');
            } else {
                // Remove 'active' class from other navigation links
                document.querySelector('nav ul li a[href="#' + sectionId + '"]').classList.remove('active');
            }
        });
    });
