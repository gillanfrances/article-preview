    $('.share').on('click', function() {
        // Toggle the visibility of the share options
        $('.share-options').fadeIn();
    });

    // Optional: Close the share options if the user clicks anywhere else on the page
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.share').length) {
            $('.share-options').fadeOut();
        }
    });
