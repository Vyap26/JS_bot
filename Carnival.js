console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:");
console.log("");

let gifts = [
    teddyBear = {
    name: 'Teddy Bear',
        id: 1,
        price: 10
    },
    bigRedBall = {
        name: "Big Red Ball",
        id: 2,
        price: 5
    },
    hugeBear = {
        name: "Huge Bear",
        id: 3,
        price: 50
    },
    candy = {
        name: "Candy",
        id: 4,
        price: 8
    },
    stuffedTiger = {
        name: "Stuffed Tiger",
        id: 5,
        price: 15
    },
    stuffedDragon = {
        name: "Stuffed Dragon",
        id: 6,
        price: 30
    },
    skateboard = {
        name: "Skateboard",
        id: 7,
        price: 100
    },
    toyCar = {
        name: "Toy Car",
        id: 8,
        price: 25
    },
    basketball = {
        name: "Basketball",
        id: 9,
        price: 20
    },
    scaryMask = {
        name: "Scary Mask",
        id: 10,
        price: 75
    }
];

for (let x = 0; x < 10; x++) {
    console.log(gifts[x].id + "- " + gifts[x].name + ", Cost: " + gifts[x].price + " tickets");
}

