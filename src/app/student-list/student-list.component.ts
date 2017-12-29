import { Component, OnInit } from '@angular/core';
import { getRandomString } from '../../../node_modules/_@types_selenium-webdriver@2.53.43@@types/selenium-webdriver/safari';

interface User{
  id:number,
  name:string,
  sex:string,
  level:string
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
      {id:1,name:"小强",sex:"男",level:"特级"},
      {id:2,name:"小明",sex:"男",level:"初级"},
      {id:3,name:"小张",sex:"女",level:"高级"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"小小",
      sex:"男",
      level:"无"
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
