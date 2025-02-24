document.addEventListener('DOMContentLoaded', function () {
    // Form submission logic
    const scholarshipForm = document.getElementById('scholarshipForm');
    const submitButton = document.querySelector('.apply button'); // Selects the submit button

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const adm = document.getElementById('adm').value.trim();
        const scholarshipType = document.getElementById('scholarship').value;

        if (!name || !email || !adm || !scholarshipType) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        const urls = {
            merit: 'merit.html',
            need: 'need.html',  // Replace with the actual need-based form URL
            sports: 'sports.html' // Replace with the actual sports form URL
        };

        if (urls[scholarshipType]) {
            // Redirect to the appropriate scholarship form
            window.open(urls[scholarshipType], '_blank'); // Opens in a new tab
        } else {
            alert('Invalid scholarship selection.');
        }

        // Clear form fields
        scholarshipForm.reset();
    });

    // Scroll animation logic
    const animateElements = document.querySelectorAll('.fade-in, .scale-up');

    function checkVisibility() {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
