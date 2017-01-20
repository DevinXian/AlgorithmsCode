/**
 * Created by wind on 17-1-20.
 * @complexity without optimization -> 2^n, 
 *  each fib(n) call fib(n-1) twice, 2 * 2 * 2 -> 2^n
 */
function fib(count) {
	if (count <= 2) {
		return 1;
	} else {
		return fib(count - 1) + fib(count - 2)
	}
}

console.log(fib(7));
