/* 
database schemas
1. users table
2. token table
3. newsletter table
4. app token
5. newsleter dispath table
*/

import { response } from "express";
import { DBInstance } from "./connection";
import { Encrypt } from "../includes/helperFunction";

export const DatabaseTableSetUp = ()=>{
    return new Promise((resolve)=>{
     // create database and users credentials
      var userQuery = String(`CREATE TABLE users 
        (userId INT AUTO_INCREMENT PRIMARY KEY, 
        userFirstName VARCHAR(255), 
        userLastName VARCHAR(255), 
        userAvatar TEXT, 
        userJoinDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        userEmail TEXT, 
        userAlternativeEmail TEXT,
        userPassword TEXT,
        userGender VARCHAR(255), 
        userDialCode VARCHAR(5), 
        userMobile VARCHAR(15), 
        userAddress TEXT, 
        userCity VARCHAR(255), 
        userState VARCHAR(255), 
        userCountry VARCHAR(255), 
        userProfession VARCHAR(255), 
        userAccountType VARCHAR(255),
        userActivated BOOLEAN,
        userBlocked BOOLEAN, 
        userNewsletter BOOLEAN, 
        userLoginNotificationToEmail BOOLEAN,
        userAccessToken TEXT, 
        userPaymentUrl TEXT, 
        userOCRImage TEXT,
        userBvnVerified BOOLEAN, 
        userBiometricLogin BOOLEAN,
        userEmailVerificationCode TEXT,
        userIvKey TEXT
      )`).replace(/[/\n]/g,"");
      DBInstance(userQuery,[]).then((response)=>{
        const email = "ekene.marshall@aspacelifetech.com";
        userQuery = `select * from users where userEmail=? limit 1`;
        DBInstance(userQuery,[email]).then((res)=>{
          if(!res.status)
          {
           var EncryTedPassword:string = "Mekene$83";
            EncryTedPassword = Encrypt(EncryTedPassword,email,"aspacelife").encryptedData;
            userQuery = `insert into users (userEmail,password) values(?,?) limit 1`;  
            DBInstance(userQuery,["ekene.marshall@aspacelifetech.com",EncryTedPassword]);
          }
        })
      });
      
      // newsletter table
      const  newsletterDispatchQuery = String(`CREATE TABLE IF NOT EXISTS newsletterDispatch 
        (
        newslId INT AUTO_INCREMENT PRIMARY KEY, 
        newslEmail TEXT, 
        newslTitle TEXT, 
        newslDescription TEXT, 
        newslType VARCHAR(255),
        newslDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        newslStatus VARCHAR(255)
      )`).replace(/[/\n]/g,"");
      DBInstance(newsletterDispatchQuery,[]);
      
      // app Token table
      const  appTokenQuery = String(`CREATE TABLE IF NOT EXISTS appToken 
        (
        tokenId INT AUTO_INCREMENT PRIMARY KEY, 
        userEmail TEXT, 
        otp TEXT, 
        phoneNumber TEXT, 
        createdDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`).replace(/[/\n]/g,"");
      DBInstance(appTokenQuery,[]);

      // newsletter table
      const  newsletterSubscriptionQuery = String(`CREATE TABLE IF NOT EXISTS newsletterSubscription 
        (
        newsId INT AUTO_INCREMENT PRIMARY KEY, 
        userEmail TEXT, 
        newsDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        newsSubscribed VARCHAR(255)
      )`).replace(/[/\n]/g,"");
      DBInstance(newsletterSubscriptionQuery,[]);

    // contact us table
    const  contactUsQuery = String(`CREATE TABLE IF NOT EXISTS contactUs 
          (
            id INT AUTO_INCREMENT PRIMARY KEY,
            fullName VARCHAR(255), 
            phoneNumber VARCHAR(20),  
            subject VARCHAR(255),  
            message TEXT, 
            status ENUM('new', 'in-progress', 'resolved', 'closed') DEFAULT 'new',
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            resolvedAt TIMESTAMP, 
            userIpAddress VARCHAR(45), 
            userAgent VARCHAR(255)
        )`).replace(/[/\n]/g,"");
        DBInstance(contactUsQuery,[]);
    })
     
}