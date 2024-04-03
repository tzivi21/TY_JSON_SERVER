const UsersCrud = require('./Dal/UsersCrud');
const PostsCrud = require('./Dal/PostsCrud');
const tokenControllers = require('./Controllers/LoginController');
const db= require('./Dal/initDB');
let token=tokenControllers.createToken(null,null);
// (async () => {
//     const a = await UsersCrud.createUser({
//        userId: 2,
//        title: "Jerusalem" ,
//        body: "YehuditS",
//     })
//    // console.log(a);
// const b = await UsersCrud.updateUser({
   
//   name: "Yehudit",
//   email: "yehudit2003@gmail.com",
//   city: "Jerusalem city" ,
//   username: "YehuditS",
//   phone: "0583214261"
// });
// console.log(b);
// console.log(await UsersCrud.getAllUsers());
// })();

