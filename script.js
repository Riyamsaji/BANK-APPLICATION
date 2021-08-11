function createAccount(){
    let account_num=accno.value;
    let account_name=accname.value;
    let username=uname.value;
    let password=pwd.value;
    let mobile=num.value;
    let balance=bal.value;
    let account={account_num,account_name,username,password,mobile,balance};
    console.log(account);

    
 
}
// function loginUser(){
//     let  user_name=uname.value;
//     let password=pwd.value;
//     let login={user_name,password}
//     console.log(login);
//     let user=JSON.parse(localStorage.getItem("user_name"))
//     //  if i give localstorage.getitem("user_name") it will throw error
//     console.log(user);
//     if(user_name in localStorage){
//       if(user.password==password){
//           alert("success")
//       }
//       else{
//           alert("invalid password")
//       }
//     }
//     else{
//         alert("invalid user")
//     }
// }