import _ from 'lodash';
import imgSrc from '../img/avatar.png';

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            const img = document.createElement("img");

            div.append(user.name + ' ' + user.age);
            img.src = imgSrc;
            img.width = 30;
            img.alt = "avatar";
            img.className = "avatar";

            container.appendChild(img);
            container.appendChild(div);
        });
    };
}

module.exports = userList;

// zzzzzzzzzzzz
/*CommentCommentCommentCommentComment zzzzzzz*/