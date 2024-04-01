const UsersCrud = require('./Dal/UsersCrud');
const PostsCrud = require('./Dal/PostsCrud');
const db= require('./dal/initDB');
(async () => {
   //  const a = await UsersCrud.createUser({
   //     userId: 2,
   //     title: "Jerusalem" ,
   //     body: "YehuditS",
   //  })
   // console.log(a);
// const b = await UsersCrud.updateUser({
//     id: 2,
//   name: "Yehudit",
//   email: "yehudit2003@gmail.com",
//   city: "Jerusalem city" ,
//   username: "YehuditS",
//   phone: "0583214261"
// });
// console.log(b);
console.log(await UsersCrud.getAllUsers());
})();

