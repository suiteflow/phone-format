// Wait for the HTML document to fully load.
document.addEventListener("DOMContentLoaded", function() {
    // Select all HTML elements with the attribute 'suite-input' equal to 'phone'.
    var phoneInputs = document.querySelectorAll('[suite-input="phone"]');

    // For each phone input element.
    phoneInputs.forEach(function(phoneInput) {
        // Add an event listener that triggers when the value of the input field changes.
        phoneInput.addEventListener('input', function() {
            // Get the current value of the input field.
            var input = this.value;
            // Remove any non-digit characters from the input.
            input = input.replace(/\D/g, '');

            // Get the format attribute of the input field.
            var format = this.getAttribute('suite-format');
            
            // If the format attribute is 'us'.
            if (format === 'us') {
                // If the input is at least 10 characters long.
                if (input.length >= 10) {
                    // Prepend '+1' to the input and format it as (XXX) XXX-XXXX.
                    input = '+1 (' + input.substr(0, 3) + ') ' + input.substr(3, 3) + '-' + input.substr(6, 4);
                }
            // If the format attribute is 'uk'.
            } else if (format === 'uk') {
                // If the input is at least 10 characters long.
                if (input.length >= 10) {
                    // Prepend '+44' to the input and format it as XXXXX XXXXXX.
                    input = '+44 ' + input.substr(0, 5) + ' ' + input.substr(5);
                }
            }
            
            // Set the value of the input field to the formatted input.
            this.value = input;
        });
    });
});
