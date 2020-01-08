import { reject } from "q";

// let aa = 10;  
// const Promi = new Promise((resolve, reject) => {
//     if( Object.is(aa, 10) ){
//         resolve({
//             name:"jiang"
//         })
//     }else{
//         reject({
//             age:"sss"
//         })
//     }
// })
// Promi.then(res => {
//     console.log(res)
    
// }).catch(err => {
//     console.log(err);
// })
// export default Promi;



// Promise.resolve("成功数据").then(res =>{// 注意不需要new了！！
//     console.log(res);
// })
// 相当于
// new Promise( (resolve, reject)=>{
//     resolve("成功数据")
// }).then(res=>{console.log(res)});



// Promise.reject("失败数据").catch(err =>{
//     console.log(err);
// })
// 相当于
// new Promise( (resolve, reject)=>{
//     reject("失败数据")
// }).then(err=>{console.log(err)});

// 批量处理（把Promise打包）
// let P1 = Promise.resolve("数据1");
// let P2 = Promise.resolve("数据2");
// let P3 = Promise.resolve("数据3");
// let Obj=[P1, P2, P3];

// Promise.all必须确保Promise都是resolve状态（成功状态）
// Promise.all(Obj).then(res => {
//     console.log(res);
// })

// Promise.race(Obj).then(res => {
//     console.log(res);
// })


// 小案例
let status = 200 ;
let login = (resolve, reject) => {
    setTimeout(
        () =>{
            if( status == 200){
                resolve({msg:"登录成功了", phone:123456, token:'qwiehfodfcas1'})
            }else{
                reject("失败接收的数据")
            }
        }, 1000)    
    
}
let info = (resolve, reject) =>{
    setTimeout(() => {
        if( status == 200){
            resolve({msg:"获取信息成功了", name:"蒋", token:'qwiehfodfcas1', qian:'你是一头猪！！！'})
        }else{
            reject("失败接收的数据")
        }
    }, 1000);
}
new Promise(login).then(res => {
    console.log(res);
    alert(res.msg);
    return new Promise(info);
}).then(res =>{
    console.log(res);
    alert(res.msg);
})