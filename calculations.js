export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function division(num1, num2) {
    return num1 / num2;
}

export function modulo(num1, num2) {
    return num1 % num2;
}

export function hypotenuseTest(num1, num2) {
    const base = (num1 ** 2);
    const perpendicular = (num2 ** 2);
    return Math.sqrt(base + perpendicular);
}

export function integerDivision(num1, num2) {
    return Math.floor(num1 / num2);
}