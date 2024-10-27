import fs from 'fs';

fs.readFile("../data/users.json", "utf8", (err, data) => {
    if (err) {
        console.error( err);
        
    }

    const users = JSON.parse(data); // Parse users data inside the callback

    fs.readFile("../data/posts.json", "utf8", (err1, data1) => {
        if (err1) {
            console.error(err1);
        }

        const posts = JSON.parse(data1); // Parse posts data inside the callback

        const result = users.map((user) => {
            return posts.filter((post) => post.userId === user.id);
        });

        console.log(result);
    });

});
