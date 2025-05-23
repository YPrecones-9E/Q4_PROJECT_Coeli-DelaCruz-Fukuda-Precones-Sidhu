function returnFeedback() {
    var name = document.getElementById('name').value;

    function getRating(groupName) {
        var radios = document.getElementsByName(groupName);
        for (let radio of radios) {
            if (radio.checked) {
                return parseInt(radio.value);
            }
        }
        return 0;
    }

    var visual = getRating('visual');
    var quality = getRating('quality');
    var navigation = getRating('navigation');
    var experience = getRating('experience');

    // Check if any rating is left unanswered
    if (visual === 0 || quality === 0 || navigation === 0 || experience === 0) {
        window.alert("Please answer all numerical fields before submitting.");
        return;
    }

    var total = visual + quality + navigation + experience;
    var average = Math.round((total / 4) * 100) / 100;

    let message;
    if (average >= 4.5) {
        message = "We're thrilled you enjoyed it!";
    } else if (average >= 3.5) {
        message = "We're glad you liked it!";
    } else if (average >= 2.5) {
        message = "We appreciate your feedback and will improve!";
    } else {
        message = "Thanks for your honesty—we'll work on it!";
    }

    window.alert(`${name}, thanks for an average rating of ${average}. ${message}`);
}