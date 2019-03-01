'use strict'

var checkboxes = document.querySelectorAll('.list__input'),
    lastChecked;

function handleCheck(e) {

    var inBetween = false;
    var context = this;

    if(context.checked && e.shiftKey) {
        checkboxes.forEach(function(checkbox) {
            console.log(checkbox);

            if(checkbox === context || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('start');
            }

            if(inBetween) {
                checkbox.checked = true;
            }

        });
    }

    lastChecked = context;
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', handleCheck)
});