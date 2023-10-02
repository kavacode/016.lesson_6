/*Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
Все це із замиканнями, наприклад:
sum(3) = 3 
sum(5) = 8
sum(20) = 28
*/

const sum = () => {
	let y = 0;
	return function (x) {
		y += x;
		return y;
	};
}

const addSum = sum();

console.log(addSum(5));  // 5
console.log(addSum(-4));  // 1
console.log(addSum(25)); // 26
