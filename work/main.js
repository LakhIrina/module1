    window.onload = function() {
        console.log('init js');
    };

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
            if(array[i] < 3 || array[i] > 10){
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

    //11
    function findNumber(){
        var numbers = [1, 2, 5, 9, 4, 13, 4, 10];
        var i = 0;

        for(i; i<numbers.length; i++){
            if(numbers[i] === 4){

                return 'Present!';
            }
        }
        return 'Not found!';
    };

    console.log(findNumber());

    //19
    function findElements(numbersOne, numbersTwo){
        var newArr = [];

        for(var i = 0; i < numbersOne.length; ++i){
            for(var j = 0; j < numbersTwo.length; ++j){
                if (numbersOne[i] == numbersTwo[j])
                    newArr.push(numbersOne[i]);
            }
        }
        console.log(newArr);
        return newArr;
    };

    findElements([1,2,8,9,14,91,3,21], [2,3,7,8,14,72]);

    //22
    function replaceInput(){
        var input1 = document.getElementById('someText22a');
        var value1 = input1.value;
        var input2 = document.getElementById('someText22b');
        var value2 = input2.value;
        input2 = value1;
        input1 = value2;

        console.log(input1, input2);
    };

    document.getElementById("replaceInput").addEventListener("click", replaceInput, false);

    //23
    function colorInput(){
        var input1 = document.getElementById('someText22a');
        var value1 = input1.value;
        var input2 = document.getElementById('someText22b');
        var value2 = input2.value;
        input2 = value1;
        input1 = value2;
        input2.style.color = 'red';
        input1.style.color = 'blue';

        console.log(input1, input2);
    };

    document.getElementById("replaceInput").addEventListener("click", colorInput, false);

    //6
    var n = 0;
    function recursion(arr){

        console.log(arr[n]);
        n++;
        // var n = arr.length;

        if(n < arr.length) {
            recursion(arr);
        }
    };

    recursion([1,9,18,4,3]);

    //18
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    var btnIndex;

    for (btnIndex = 0; btnIndex < prizes.length; btnIndex++) {
        (function(btnIndex){document.getElementById('btn-' + btnIndex).onclick = function() {
            console.log(prizes[btnIndex]);
        }})(btnIndex);
    }