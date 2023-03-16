// type user_type = {
//     Developer: "user", 
//     data:string
// }
// type admin_type = {
//     Developer: "admin",
//     data: string
// }
// type imposter_type = {
//     Developer: "imposter",
// }
// function user_priveleges (Developer: "user" | "admin" | "imposter"): user_type | admin_type | imposter_type {
//     if (Developer == "user") {
//         console.log("You are a user");
// /// 100000 lines of code 
//        return {Developer : "user", data : "hello this is user"} as user_type;
//     }
//     else if (Developer == "admin") {
//             console.log("You are an admin");
//        return {Developer : "admin", data :"hello admin"} as admin_type;
//     }
//     else if (Developer == "imposter") {
//                 console.log("You are an imposter");
//         return {Developer : "imposter"} as imposter_type;
//     }
//     else {
//                     throw new Error("You are not a user, admin or imposter");
//                 }
// }; 
// type Api_data = {
//     data: {
//         value: string
//     }
// }
// type Api_data2 = {
//     data: {value : string}, 
//     ttl : string 
// }
// type main_getdata = {
//         data1: Api_data,
//         data2: Api_data2
//     }
// const fetch_some_data1 = () => { 
//     const data : Api_data = {
//         data : { value : "hello world"}
//     }
//     return data; 
// }
// const fetch_some_data2 = () => {
//     const data: Api_data2 = {
//         data: { value: "hello world", },
//         ttl: "hello world"
//     }
//     console.log(data?.data?.value)
//     return data;
// }
//     const get_data = () => {
//         const data1 = fetch_some_data1();
//         const data2 = fetch_some_data2();
//         return { data1, data2 } as main_getdata;
//     }
//     const hello = get_data();
//     console.log(hello.data1.data.value);
// let user_component: { value: string }| null = {
//     value : "hello world"
// }!
// console.log(user_component); 
// const array : number[] = [1, 2, 3]; 
// array.forEach(item => console.log(item)); 
// array.map(item => {
//     console.log(item)
//     return item;
// }); 
var input = 'a';
var stringu = "the quick brown fox jumped over the lazy dogaaaaa";
var stringu2 = stringu.split("");
console.log(stringu2);
var answer = stringu2.filter(function (item) { return item != input; }).join("");
console.log(answer);
