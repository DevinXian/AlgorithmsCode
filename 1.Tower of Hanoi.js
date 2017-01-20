/**
 * Created by wind on 17-1-20.
 * @complexity 2^n - 1, see
 * @link http://stackoverflow.com/questions/12383044/complexity-for-towers-of-hanoi
 */
function move(count, a, b, c) {
	if (count <= 0)  return;
	//借助c柱将a柱最大盘上面的所有盘子移动到b柱
	move(count - 1, a, c, b);
	//a柱最大盘拿到c柱
	console.log(['move', a, '->', c].join(' '));
	//借助a柱将b柱上的盘子移动到c上
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
