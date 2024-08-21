// JavaScript code
        function disableScrolling() {
            setTimeout(function() {
                document.body.styles.overflow = 'hidden';
            }, 1000);
        }
        
        function enableScrolling() {
            document.body.styles.overflow = '';
        }
