import userList from './userList.js';
import '../css/stylescss.scss';
//require('../css/style.css');
// zzzzzzzzzzzzzz
/*CommentCommentCommentCommentComment zzzzzzzzzzzzzz*/
const users = [
    { name: 'Oksana', age: 22 }, 
    { name: 'Viktor', age: 14 },
    { name: 'Ivan', age: 37 }, 
    { name: 'Yana', age: 45 },
    { name: 'Oleksandr', age: 19}, 
    { name: 'Olena', age: 18}, 
    { name: 'Mykola', age: 27}, 
    { name: 'Andriy', age: 33}, 
    { name: 'Zakhar', age: 40}
];
if(users[0].name != users[1].name) {console.log(123);}
const userListModule = new userList(users);
userListModule.showList();