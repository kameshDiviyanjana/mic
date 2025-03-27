import usernew from '../models/user.js'
import jwt from 'jsonwebtoken'
//  const asyerrohander = (func)=>{

//      return (req,res,next)=>{
//        func(req,res,next).catch(error=> {next(error)})
//      }
//    }
import {asyerrohander} from '../utils/error.js'
// const asyerrohander = (func) => {
//     return (req, res, next) => {
//         // Call the provided function and handle errors asynchronously
//         func(req, res, next).catch(err => {
//             next(err); // Pass the error to the next middleware
//         });
//     };
// };
import {customError} from '../utils/customeError.js'
// export const createuser = asyerrohander(
//      async(users)=>{

//           try{
//                const newOrders = (await new usernew(users).save()).toObject();
            
//                return newOrders;
             
//           }catch(error){
//                console.log(" ggggggggggggggggggggggggggggggggggggggggggggg");
//                 console.log(error);
//                 console.error(error);
//                // const errors = new customError('customerruo 1256333 rouet',404);
//                // next(errors)
//                res.status(300).json({
//                     status:3000,
//                     massage :error
//                })
//           }
        
//      }
// )
export const createuser = async(users)=>{

     // try{
          const newOrders = (await new usernew(users).save()).toObject();
          // const token = jwt.sign({id:newOrders._id,role :newOrders.usertype},process.env.SECTRE_TOKEN,{
          //      expiresIn : process.env.EXPIRE_Y 
          // })
          return newOrders;
          // return { token, newOrders };
        
     // }catch(error){
          
     //      const errors = new customError('customerruo 1256333 rouet',404);
     //     console.log(error)
          
     // }
   
}

export const oneuserfindbyid = async(filter)=>{

     try{

         const userfind = await usernew.findOne({_id : filter})
         if (!userfind) {
           console.log('No order found usdrr.');
            return null;
            
          }
         return userfind
     }catch(error){
        console.log(error);
     }
     // const userfind = await usernew.findOne({_id : filter})
     // if (!userfind) {
     //   console.log('No order found usdrr.');
     //    return null;
        
     //  }
     // return userfind
     
}

export const deleteuder = async(filter)=>{

    try{

        const muser  = await usernew.findByIdAndDelete(filter)
        if (!muser) {
            console.log('No order found with filters:', filter);
            return null;
          }
        return muser
   }catch(error){

        console.log(error)
   }
}