// window.onload = function() {
//     console.log('init js');
// };
//4
function pow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}

console.log(pow(2, 5));

//5
function comparison(numberOne, numberTwo){
    return numberOne === numberTwo;
}

comparison(1, 2);

//7
function loop2(){
    var i = 1;

    for(i; i<=50; i++){
        console.log(i);
    }
}
loop2();

function loop1() {
    var i = 1;

    while (i < 50) {
        console.log(i);
        i++;
    }
};
loop1();

//8
function outObj() {
    var key;
    var value;
    var obj = {
        'Оттава': 'Канада',
        'Киев': 'Украина'
    };

    for (key in obj) {
        console.log(key + "- это " + obj[key]);
    }
}

outObj();

//10
function scanArray(){
    var array = [2, 5, 9, 15, 0, 4];
    var i = 0;

    for(i; i<array.length; i++){
        if(array[i]<3 || array[i]>10){
            console.log('number:', array[i]);
        }
    }
};
scanArray();

//12
function joinsentenses(){
    var array = ['я', 'учу', 'javascript', '!'];
    var joinArray = array.join(' ');

    console.log(joinArray);
};

joinsentenses();
