import {
    compareNumbers, generateRandomNumber
} from '../apps/utils.js'


const test = QUnit.test;

    // compareNumbers Tests

test('compareNumbers should return 0 when passed 4 and 4', (expect) => {
    const expected = 0;
    const actual = compareNumbers(4,4);

    expect.equal(expected, actual);
});

test('compareNumbers should return 1 when passed 6 and 4', (expect) => {
    const expected = 1;
    const actual = compareNumbers(6,4);

    expect.equal(expected, actual);
});

test('compareNumbers should return -1 when passed 2 and 4', (expect) => {
    const expected = -1;
    const actual = compareNumbers(2,4);

    expect.equal(expected, actual);
});

    // generateRandomNumber Tests

test('generateRandomNumber should return a number between 0 and 10 when passed 10', (expect) => {
    const expected = true;
    let actual

    if (typeof generateRandomNumber(10) === 'number' && generateRandomNumber(10) >= 0 && generateRandomNumber(10) <= 10) {
        actual = true;
    }
    else {
        actual = false;
    }

    expect.equal(expected, actual);
})