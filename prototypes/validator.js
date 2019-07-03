function create3dArray() {
	const rows = 5;
	const columns = 5;
	const slices = 3;

	let spatial3dMap = new Array(columns);
	
	for ( let i = 0; i < spatial3dMap.length; i++ ) {
		spatial3dMap[i] = new Array(rows);
		for ( let s = 0; s < spatial3dMap.length; s++ ) {				
			spatial3dMap[i][s] = new Array(slices);		
		}
	}

	for (let slice = 0; slice < slices; slice++) {
		for (let row = 0; row < rows; row++) {
			for (let column = 0; column < columns; column++) {
				spatial3dMap[row][column][slice] = 0;
			}
		}				
	}
	return spatial3dMap
}

function validateBox(obj) {
	let xStart = obj.coord[0];
	let yStart = obj.coord[1];
	let zStart = obj.coord[2];
	let width = obj.size[0];
	let depth = obj.size[1];
	let height = obj.size[2];
	let keep_going = true
	
	for (let y = 0; (y < depth && keep_going === true); y++) {
		for (let x = 0; (x < width && keep_going === true); x++) {
			for (let z = 0; (z < height && keep_going === true); z++) {
				keep_going = fillSquare(x + xStart, y + yStart, z + zStart);
				if (keep_going === false) {
					return obj
				}
			}
		}
	}
}

function fillSquare(x, y, z) {
	if (spatial3dMap[x][y][z] === 1) {	
		return false;
	} else {
		spatial3dMap[x][y][z] = 1;
		return true;			
	}

}

function checkSquare(x, y, z) {
	return spatial3dMap[x][y][z];
}
