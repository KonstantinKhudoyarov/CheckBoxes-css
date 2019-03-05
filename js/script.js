'use strict'

var checkboxes = document.querySelectorAll('.list__input'),
    lastChecked,
    button = document.querySelector('.btn');

function handleCheck(e) {

    var inBetween = false;
    var context = this;

    if(context.checked && e.shiftKey) {
        checkboxes.forEach(function(checkbox) {

            if(checkbox === context || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }

        });
    }

    lastChecked = context;
}

function clearCheckBoxes() {
    checkboxes.forEach(function(checkbox){
        if(checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', handleCheck)
});

button.addEventListener('click', clearCheckBoxes);