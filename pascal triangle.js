/**
 * Created by wind on 17-1-20.
 * @link http://www.cnblogs.com/clover-toeic/p/3766001.html
 */
const SPACE = ' ';

function printSpace(count) {
	var str = '';
	for (let i = 0; i < count; i++) {
		str += SPACE;
	}
	return str;
}

function triangle(rowNum) {
	//two dimension array [rowNum * N]
	const result = new Array(12);

	// simple way 1
	// for (let r = 0; r < rowNum; r++) {
	// 	const row = [];
	// 	row[0] = row[r] = 1;//front tail, set value = 1
	// 	for (let c = 1; c < r; c++) {
	// 		row[c] = result[r - 1][c - 1] + result[r - 1][c]
	// 	}
	// 	result[r] = row;
	// }

	// simple way 2
	for (let row = 0; row < rowNum; row++) {
		result[row] = new Array(rowNum);
		result[row][0] = result[row][row] = 1;
	}

	for (let row = 2; row < rowNum; row++) {
		for (let col = 1; col <= row / 2; col++) {
			result[row][col] = result[row - 1][col - 1] + result[row - 1][col];
		}
		//fold by half, reduce half number of addition times
		for (let col = row - 1; col > row / 2; col--) {
			result[row][col] = result[row][row - col];
		}
	}

	for (let r = 0; r < rowNum; r++) {
		console.log(result[r].join(SPACE));
	}
}

triangle(12);
