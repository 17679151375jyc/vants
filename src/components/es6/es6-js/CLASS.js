let ming="蒋";
let sum=166;
let lei="class_name"
const func1 = () =>{
    console.log("执行力func1");
}
// 父类
class Pro{
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    show(){
        console.log("父类的show方法")
        return `我的名字是：${this.name};${this.age}岁`
    }
    static showJing(){
        return '直接Pro静态调用showJing方法'
    }
    [lei](){
        return "外部自定义名字" ;
    }
    // 监听下方设置的属性
    // set keys(val){
    //     console.log(`设置好了keys属性的值为：${val}`)
    // }
    // // 获取值
    // get keys(){
    //     return `123`
    // }
}
// 子类
class Child extends Pro{
    constructor(name, age, skill){
        super(name, age)
        this.skill = skill;
    }
    showSkill(){
        return `skill：${this.skill}`
    }
    show(){
        // 从子类调用父类中的函数
        console.log(super.show())
        console.log("子类的show方法")
    }

}
let P1 = new Pro("jion",16);
// 设置属性与值
// P1.keys = "这是值";
// console.log(P1.keys)
console.log(P1.show())//动态调用父类
console.log(Pro.showJing());// 静态调用父类里面的方法
let C1 = new Child("zi", 6, "nm")
console.log(C1)//子类继承父类
C1.show()//调用子类的方法








export default {
    ming,
    sum,
    func1,
    Pro
}