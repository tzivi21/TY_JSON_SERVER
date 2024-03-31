const UsersCrud = require('./Dal/UsersCrud');

(async () => {
    const a = await UsersCrud.createUser({
       id: 4567,
       name: "Yehudit2",
       email: "yehudit2003@gmail.com",
       city: "Jerusalem" ,
       username: "YehuditS",
       phone: "0583214261"
    })
   console.log(a);
// const b = await UsersCrud.updateUser({
//     id: 6523,
//   name: "Yehudit2",
//   email: "yehudit2003@gmail.com",
//   city: "Jerusalem City" ,
//   username: "YehuditS",
//   phone: "0583214261"
// });
// console.log(b);
console.log(await UsersCrud.getAllUsers());
})();