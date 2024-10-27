import fs  from 'fs/promises';
fs.readFile("../data/users.json", "utf8")
.then((data)=>{
    const users = JSON.parse(data);
    console.log(users);
    fs.readFile("../data/posts.json","utf8")
    .then((data1)=>{
        const posts=JSON.parse(data1);
        const result = users.map((user) => {
            return posts.filter((post) => post.userId === user.id);
        });

        console.log(result);
    })
    .catch((err)=>console.log(err));
})