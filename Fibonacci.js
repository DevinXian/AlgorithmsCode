/**
 * Created by wind on 17-1-20.
 * @complexity without optimization -> 2^n,
 *  each fib(n) call fib(n-1) twice, 2 * 2 * 2 -> 2^n
 *  递归简单，但是不如循环来的高效
 */
function fib(count) {
	if (count <= 2) {
		return 1;
	} else {
		return fib(count - 1) + fib(count - 2)
	}
}

//非递归
function noRecursion(count) {
	if (count <= 2) {
		return 1;
	}

	let num_1 = 1, num_2 = 1, res;
	for (let i = 3; i <= count; i++) {
		res = num_2 + num_1;
		num_2 = num_1;
		num_1 = res;
	}
	return res;
}

console.log(fib(7));
console.log(noRecursion(7));
