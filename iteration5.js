// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const major = ages.filter(item => item > 18);

console.log(major);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const par = ages2.filter(item2 => item2 % 2 == 0);

console.log(par);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, mostGamePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, mostGamePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, mostGamePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, mostGamePlayed: 'Among Us'}
];

const mostPlayed = streamers.filter(streamer => streamer.mostGamePlayed === "League of Legends");

console.log(mostPlayed);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const nameU = streamers.filter(streamer => streamer.name.includes("u"));

console.log(nameU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const legends = streamers.filter(streamer => streamer.mostGamePlayed.includes("Legends")).map(legend => {
    if (legend.age > 35) {
        legend.mostGamePlayed = legend.mostGamePlayed.toLocaleUpperCase();
    }
        
    return legend;
});

console.log(legends);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
let input = document.querySelector(".streamerInput");

input.addEventListener("keydown", function(event) {
   if (event.key === "Enter" && input.value != "") {
        console.log(streamers.filter(streamer => streamer.name.includes(input.value)));
        input.value = "";
    } 
});

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
let button = document.querySelector(".streamerButton");

button.addEventListener("click", function(event) {
    console.log(streamers.filter(streamer => streamer.name.includes(input.value)));
    input.value = "";
 });