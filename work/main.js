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
