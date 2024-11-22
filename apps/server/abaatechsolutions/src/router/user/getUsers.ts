import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { AppConstants } from "../../includes/constants";
import { APIResponseSchema, perPageLimit } from "../../includes/types";

interface UsersProp {
page:number;
}
// this is where users signup to the system
export const GetUsersRoute = (app:Express)=>{
  app.get(AppConstants.routes.get_users,(request:Request,response:Response)=>{
  const payload =  request.body;
  GetUsersFunction(payload).then((res)=>{ 
    response.json(res);
  })
  })

}
const GetUsersFunction = (payload:UsersProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{ 
var page = 0;
var startAt = 0;
var limit = 50;
var endAt = 50;
if(payload?.page)
{
    page = parseInt(String(payload?.page));
    if(startAt > 1)
    {
      startAt = (limit * page);
      endAt = (startAt + limit) - 1;
    }
}else{
    page = 1;
}
  var query = `SELECT * FROM users ORDER BY userId DESC LIMIT ${startAt},${endAt}`;
  DBInstance(query,[]).then((response) => {
  query = `SELECT COUNT(*) AS total FROM users`;
  DBInstance(query,[]).then((res) => {
  const allUserCounts = res.data[0].total;
  resolve({...response,
    message:response.status?"Record fetched.":"Oops something went wrong",
    data:{
        users:response.data.map((a,i)=>{
    return {
        id:a.userId,
        firstName:a.userFirstName,
        lastName:a.userLastName,
        avatar:a.userAvatar,
        createdAt:a.userJoinDate,
        email:a.userEmail,
        gendar:a.userGender,
        phoneNumber:a.userDialCode+a.userMobile,
        address:a.userAddress,
        city:a.userCity,
        state:a.userState,
        country:a.userCountry,
        profession:a.userProfession,
        accountType:a.userAccountType,
        isActivated:a.userActivated !== null?String(a.userActivated) == "1":false,
        isAccountBlocked:a.userBlocked !== null?String(a.userBlocked) === "1":false,
        isNewsLetterNotificationEnabled:a.userNewsletter !== null?String(a.userNewsletter) === "1":false,
        isEmailNotificationEnabled:a.userEmailLoginNotification !== null?String(a.userEmailLoginNotification) === "1":false,
        isBvnVerified:a.userBvnVerified !== null?String(a.userBvnVerified) === "1":false,
        isBiometricLoginEnabled:a.userBiometricLogin !== null?String(a.userBiometricLogin) === "1":false
    }
  }),
  page:page,
  perPage:perPageLimit,
  nextPage:allUserCounts > limit * page,
  total:allUserCounts
  }});
})
  })
  })
  }
