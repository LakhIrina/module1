window.onload = function() {
    var elements = {
        prev: document.getElementById('prev'),
        current: document.getElementById('current'),
        next: document.getElementById('next')
    };

    var events = {
        prev: function () {
            console.log('prev');
        },

        current: function () {
            console.log('current');
        },

        next: function () {
            console.log('next');
        }
    };

    var key;

    for(key in elements){
        console.log(key);
        elements[key].addEventListener('click', events[key]);
    }
};