"use strict";

const db = require('../config/db');

//class명은 파일이름과 동일한게 좋음
class UserStorage{
    
     static getUsersInfo(id){
        return new Promise((resolve,reject) => {
            const query = "SELECT * FROM users where uid = ?;";
            db.query(query,[id],(err,data)=>{
                if(err) throw reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static getUsersName(id){
        return new Promise((resolve,reject) => {
            const query = "SELECT name FROM users where uid = ?;";
            db.query(query,[id],(err,data)=>{
                if(err) throw reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve,reject) => {
            // const query = "INSERT INTO users(uid,name,psword) VALUES(?,?,?);";
            //db.query(query,[userInfo.uid,userInfo.name,userInfo.psword],
            const query = "INSERT INTO users(uid,psword,name,age,gen,country,email) VALUES(?,?,'3','3','3','3','3');";
            db.query(query,[userInfo.uid,userInfo.password],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            });
        });
        
    }



}
module.exports = UserStorage;
