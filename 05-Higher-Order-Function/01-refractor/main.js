function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    'Do you agree?',
    function () {
        alert("I'm agree with you.");
    },
    function () {
        alert('whyyyyyyy !');
    }
);