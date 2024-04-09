//1

for (let i = 0; i <= 20; i++){
    console.log(i);
};

//////////////////////////////////////////////////////


//2

let i = 0;
while (i <= 30){
    console.log(i);
    i++;
};

//////////////////////////////////////////////////////


//3

//let i = 0;
do {
    console.log(i);
    i++;
}
while (i <= 40);

//////////////////////////////////////////////////////


//4

const numbers = [1,2,5,7,8,10,23,24,26]

for(let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

//////////////////////////////////////////////////////


//5

const currentDay = new Date().getDay();

switch (currentDay) {
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Error");
}

//////////////////////////////////////////////////////