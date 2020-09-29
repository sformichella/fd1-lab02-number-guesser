



export function compareNumbers(num1, num2) {
    return Math.sign(num1 - num2);
}

export function toggleHidden(element) {
    element.classList.toggle('hidden');
}

export function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
}