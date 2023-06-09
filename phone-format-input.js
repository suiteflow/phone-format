document.addEventListener("DOMContentLoaded", function() {
    var phoneInputs = document.querySelectorAll('[suite-input="phone"]');

    phoneInputs.forEach(function(phoneInput) {
        var format = phoneInput.getAttribute('suite-format');
        var countryCode;
        if (format === 'us') {
            countryCode = '1';
        } else if (format === 'uk') {
            countryCode = '44';
        } else if (format === 'kw') {
            countryCode = '965';
        } else if (format === 'fr') {
            countryCode = '33';
        } else if (format === 'au') {
            countryCode = '61';
        }

        // Prepend the country code when the page loads
        if (phoneInput.value.length === 0) {
            phoneInput.value = '+' + countryCode + ' ';
        }

        phoneInput.addEventListener('keyup', function() {
            var input = this.value;
            // remove any non-digit characters except for the country code
            input = input.replace(new RegExp('(?<!^\\+' + countryCode + ')\\D', 'g'), '');

            if (input.length > countryCode.length + 1) {
                if (format === 'us') {
                    // format the input (XXX) XXX-XXXX for US
                    if (input.length >= countryCode.length + 10) {
                        input = '+' + input.substr(0, 1) + ' (' + input.substr(1, 3) + ') ' + input.substr(4, 3) + '-' + input.substr(7, 4);
                    }
                } else if (format === 'uk') {
                    // format the input XXXXX XXXXXX for UK
                    if (input.length >= countryCode.length + 11) {
                        input = '+' + input.substr(0, 2) + ' ' + input.substr(2, 5) + ' ' + input.substr(7);
                    }
                } else if (format === 'kw') {
                    // format the input XXXX XXXX for Kuwait
                    if (input.length >= countryCode.length + 8) {
                        input = '+' + input.substr(0, 3) + ' ' + input.substr(3, 4) + ' ' + input.substr(7);
                    }
                } else if (format === 'fr') {
                    // format the input XXXX XXX XXX for France
                    if (input.length >= countryCode.length + 10) {
                        input = '+' + input.substr(0, 2) + ' ' + input.substr(2, 4) + ' ' + input.substr(6, 3) + ' ' + input.substr(9);
                    }
                } else if (format === 'au') {
                    // format the input 4XX XXX XXX for Australia
                    if (input.length >= countryCode.length + 9) {
                        input = '+' + input.substr(0, 2) + ' ' + input.substr(2, 1) + input.substr(3, 2) + ' ' + input.substr(5, 3) + ' ' + input.substr(8);
                    }
                }
            } else {
                input = '+' + countryCode + ' ';
            }

            // set the input value to the formatted input
            this.value = input;
        });
    });
});
