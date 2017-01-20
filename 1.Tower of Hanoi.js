/**
 * Created by wind on 17-1-20.
 * @complexity 2^n - 1, see 
 * @link http://stackoverflow.com/questions/12383044/complexity-for-towers-of-hanoi
 */
function move(count, a, b, c) {
	if (count <= 0)  return;
	move(count - 1, a, c, b);
	console.log(['move', a, '->', c].join(' '));
	move(count - 1, b, a, c);
}

function run() {
	console.log('请输入移动的盘数：');

	process.stdin.on('readable', () => {
		const chunk = process.stdin.read();
		if (chunk !== null) {
			const num = parseInt(chunk.toString());
			move(num, 'A', 'B', 'C');
			process.stdin.emit('end')
		}
	});

	process.stdin.on('end', () => {
		process.exit(0)
	});
}

run();
