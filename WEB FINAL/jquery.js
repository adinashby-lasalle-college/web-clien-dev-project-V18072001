$(document).ready(function() {
    // Updated set of mood emojis, now including 47 emojis
    const moods = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", 
        "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🤗", "🤩",
        "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣",
        "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😡", "🤬", "😶",
        "😶‍🌫️", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇"
    ];

    let currentMood = 0;

    // Function to change the emoji
    function changeEmoji() {
        currentMood = (currentMood + 1) % moods.length;

        // Change the mood emoji
        $("#themeToggle").text(moods[currentMood]);

        // Toggle between the cool and sad themes
        if (currentMood % 2 === 0) {
            $("#themeToggle").addClass('cool-theme').removeClass('sad-theme');
        } else {
            $("#themeToggle").addClass('sad-theme').removeClass('cool-theme');
        }
    }

    // Automatically change the emoji every 3 seconds
    setInterval(changeEmoji, 3000);  // Change every 3 seconds

    // Manual toggle when the button is clicked
    $("#themeToggle").click(function() {
        changeEmoji();  // Change the emoji on click as well
    });
});



$(document).ready(function () {
    // Show popup when clicking on the schooling card
    $("#schoolingCard").on("click", function () {
        $("#popup-schooling").fadeIn(); // Show the popup with a fade effect
    });

    // Show popup when clicking on the achievements card
    $("#achievementsCard").on("click", function () {
        $("#popup-achievements").fadeIn(); // Show the popup with a fade effect
    });

    // Show popup when clicking on the college card
    $("#collegeCard").on("click", function () {
        $("#popup").fadeIn(); // Show the popup with a fade effect
    });

    // Close popup when clicking on the close button for schooling
    $("#closePopupSchooling").on("click", function () {
        $("#popup-schooling").fadeOut(); // Hide the popup with a fade effect
    });

    // Close popup when clicking on the close button for achievements
    $("#closePopupAchievements").on("click", function () {
        $("#popup-achievements").fadeOut(); // Hide the popup with a fade effect
    });

    // Close popup when clicking on the close button for college
    $("#closePopup").on("click", function () {
        $("#popup").fadeOut(); // Hide the popup with a fade effect
    });

    // Close popup when clicking outside the content for schooling
    $(document).on("click", function (e) {
        if ($(e.target).is("#popup-schooling")) {
            $("#popup-schooling").fadeOut(); // Hide the popup with a fade effect
        }
    });

    // Close popup when clicking outside the content for achievements
    $(document).on("click", function (e) {
        if ($(e.target).is("#popup-achievements")) {
            $("#popup-achievements").fadeOut(); // Hide the popup with a fade effect
        }
    });

    // Close popup when clicking outside the content for college
    $(document).on("click", function (e) {
        if ($(e.target).is("#popup")) {
            $("#popup").fadeOut(); // Hide the popup with a fade effect
        }
    });
});
