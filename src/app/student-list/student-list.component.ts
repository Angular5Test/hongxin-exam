import { Component, OnInit } from '@angular/core';
import { getRandomString } from '../../../node_modules/_@types_selenium-webdriver@2.53.43@@types/selenium-webdriver/safari';

interface User{
  id:number,
  name:string,
  github:string,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
if('asc'==type){
let sortedArr = this.users.sort((a,b)=>a.id < b.id ? -1 : 1);
console.log(sortedArr);
}else if('desc'==type){
  let sortedArr = this.users.sort((a,b)=>a.id < b.id ? 1 : -1);
  console.log(sortedArr);
}else if('random'==type){
  let sortedArr = this.users.sort((a,b)=>Math.random()*a.id < Math.random()*b.id ? 1 : -1);
  console.log(sortedArr);
}

  console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"Ryane",github:"ryanemax",sex:"male"},
      {id:2,name:"Liming",github:"liming",sex:"male"},
      {id:3,name:"Xiaohong",github:"xiaohong",sex:"female"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"Jack",
      github:"Jack",
      sex:"male"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
