var storage={
	set(key,value) {
		localStorage.setItem(key,JSON.stringify(value));
	},
	get(key){
		return JSON.parse(localStorage.getItem(key));
	},
	remove(key){
		localStorage.removeItem(key);
	},
	// 清楚所有数据
	clear(){
		localStorage.clear();
	},
	// 查看全部数据
	valueOf(){
		localStorage.valueOf();
	},
	// 读取指定键值的数据名称
	key(Number){
		localStorage.key(Number);
	},
	// 判断localstorage库是否含有某个属性
	hasOwnProperty(key){
		localStorage.hasOwnProperty(key);
		// console.log(hasOwnProperty);
		// 返回true或false
	},

}
export default storage;