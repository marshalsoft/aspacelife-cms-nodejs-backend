
import {MysqlError,createConnection} from 'mysql';
import { DBResponseSchema } from '../includes/types';
import { DBSettings } from '../includes/constants';

export const DBInstance = (query:string,values:any[])=>{
    return new Promise<DBResponseSchema>((resolve,reject)=>{
    const connection = createConnection(DBSettings);
    connection.connect((err:MysqlError)=>{
     if (err) {
       console.error('Error connecting to the database:', err,query);
       return resolve({status:false,message:err.message,data:[]});
     }
    connection.query(query,values,
     (err, results) => {
       if (err){
       console.error('Error database:', err);
         resolve({status:false,data:[],message:err.message});
       }else{
         if(Array.isArray(results) && results.length === 0)
         {
           resolve({status:false,data:[],message:"record not found."});
         }else{
           resolve({status:true,data:results,message:"success"})
         }
     }
   });
    connection.end();
    });
  })
 }