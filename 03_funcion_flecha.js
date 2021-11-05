const promedio = function (a, b) {
    return (a + b) / 2;
};

const promedio2 = (a, b) => {
    return (a + b) / 2;
};

const promedio3 = (a, b) => (a + b) / 2;

console.log(promedio(3, 4)); // 3.5
console.log(promedio2(2, 8)); // 5
console.log(promedio3(12, 8)); // 10

