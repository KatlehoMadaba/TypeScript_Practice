// import {useRef} from 'react';
// import bcrypt from 'bcryptjs'

// export const decryptedPassword=(value)=>{
//   console.console(password) 
//   const hashedPassword=bcrypt.hashSync(password,10) 

//   // window.localStorage.setItem('login',JSON.stringify())
//   const getHashedPassword=JSON.parse(localStorage.getItem('login').hashedPassword)
//   bcrypt.compare(password,getHashedPassword,function(err,isMatch){
//     if(error){
//       throw err;
//     }else if(!isMatch){
//       console.log('Password doesnt doesnt match')
//     }else{
//       console.log("Password matches")

//     }
//   })
// }
// const InputPassword=()=>{
//   const passwordInputRef=useRef();
//   return (
//    <input type="password" ref={passwordInputRef}/>
//   )
// }
// export default InputPassword;