
export function roll(sidesnum, dicenum, rollnum){
	const result = [];
	for(var i = 0; i < rollnum; i++){
		let cur = 0;
		for(var j = 0; j < dicenum; j++){
			cur += randomnum(sidesnum);
		}
	result.push(cur);
	}

	const res = {
		sides: sidesnum,
		dice: dicenum,
		rolls: rollnum,
		results: result
	};
	return res;
}

function randomnum(sidenum){
	var randomNumber1 = Math.floor(Math.random() * sidenum) + 1;
	return randomNumber1;
}


