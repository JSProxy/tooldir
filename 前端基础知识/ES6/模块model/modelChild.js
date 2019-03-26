export {webName,url,year,add,Student} from"./modelOne.js";

//继承过来的 东西不能加 default


export default class StudentChild{

	constructor(){
		console.log("子类被创建");
	}
}