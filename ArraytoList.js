const arrayToList = (array)=>{
	list = null;
	for(let n = array.length-1; n >= 0; n--){
		list = {value: array[n], rest: list};
	}
	return list;
}