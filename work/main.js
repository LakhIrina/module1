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


//13
function concat() {
    var arrOne = ['a', 'b', 'c'];
    var arrTwo = [1, 2, 3];
    var newArr = arrOne.concat(arrTwo);

    console.log(newArr);

};
concat();

//14
function addElem(){
    var arr = ['a', 'b', 'c'];
    var newArr = arr.push('1', '2', '3');

    console.log(arr);
}
addElem();

//17
function findElement(array, number){
    var i = 0;
    var index;

    for(i; i<array.length; i++){
        if(array[i] === number){
            index = array.indexOf(number);

            console.log('Index: ', index);
            return index;
        }
    }
    console.log('Not found');
};

findElement([2,5,9], 4);

//21
function addText(){
    document.getElementById('someText').value = "Hello";
};

document.getElementById("buttonTask21").addEventListener("click", addText, false);

//24
function addInput(){
    var input=document.createElement('input');
    input.type = 'text';
    input.name = 'value';
    document.body.appendChild(input); //или можно через innerHTML
};

document.getElementById("addInput").addEventListener("click", addInput, false);

//25
var input = document.getElementById("someText25");

function focusInput(){
    var val = input.value;

    console.log(val);
};

input.addEventListener("blur", focusInput, false);