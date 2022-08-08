// Una variable que contenga tu altura en centímetros (entero)
const altura_cm = 175
console.log(altura_cm)
// Una variable que contenga tu altura en metros (número de coma flotante)
const altura_m = 1.75
console.log(altura_m)
// Una variable que contenga tu peso en kilogramos (número de coma flotante)
const peso_kg = 75.4
console.log(peso_kg)
//  Una variable que contenga tu altura en metros redondeada hacia arriba
const altura_red = Math.ceil(altura_m)
console.log(altura_red)
// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const peso_red = Math.floor(peso_kg)
console.log(peso_red)
// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(sonIguales)