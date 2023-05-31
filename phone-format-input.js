<script>
document.addEventListener("DOMContentLoaded", function() {
    var phoneInputs = document.querySelectorAll('[suite-input="phone"]');

    phoneInputs.forEach(function(phoneInput) {
        phoneInput.addEventListener('input', function() {
            var input = this.value;
            // remove any non-digit characters
            input = input.replace(/\D/g, '');
            
            var format = this.getAttribute('suite-format');
            
            if (format === 'us') {
                // Check if input already starts with '1', if not prepend it
                if(input.substr(0, 1) !== '1') {
                    input = '1' + input;
                }
                // format the input (XXX) XXX-XXXX for US
                if (input.length >= 11) {
                    input = '+' + input.substr(0, 1) + ' (' + input.substr(1, 3) + ') ' + input.substr(4, 3) + '-' + input.substr(7, 4);
                }
            } else if (format === 'uk') {
                // Check if input already starts with '44', if not prepend it
                if(input.substr(0, 2) !== '44') {
                    input = '44' + input;
                }
                // format the input XXXXX XXXXXX for UK
                if (input.length >= 12) {
                    input = '+' + input.substr(0, 2) + ' ' + input.substr(2, 5) + ' ' + input.substr(7);
                }
            }
            
            // set the input value to the formatted input
            this.value = input;
        });
    });
});
</script>
