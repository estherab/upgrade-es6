// Crea una arrow functión que tenga dos parámetros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parámetros.
const sum = (a = 10, b = 5) => {
    console.log(a + b);
};

// 1.1 Ejecuta esta función sin pasar ningún parámetro
sum();

// 1.2 Ejecuta esta función pasando un solo parámetro
sum(2);

// 1.3 Ejecuta esta función pasando dos parámetros
sum(3, 8);