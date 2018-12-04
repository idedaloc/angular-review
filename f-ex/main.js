let ExportedLike = require('./counter');
let user1 = new ExportedLike(2, true);
console.log(user1.isLiked);
let liked = user1.isLiked ? '' : 'not ';
console.log("User1 with " + user1.likes + " currently is " + liked + "liked by you");
user1.like();
liked = user1.isLiked ? '' : 'not ';
console.log("User1 with " + user1.likes + " currently is " + liked + "liked by you");
