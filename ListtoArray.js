// function to convert list to array00
const listToArray=(list)=>{
	let array = [];
	for(let est = list; est; est = est.rest){
		array.push(est.value);
	}
	return array;
}
