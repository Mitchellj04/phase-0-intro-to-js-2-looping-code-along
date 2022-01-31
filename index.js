// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = ["wonderful"];

function writeCards(names, eventName) {
    const thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou[i] = `Thank you, ${names[i]}, for the ${eventName} gift!`
        debugger;
    }
    return thankYou;
}