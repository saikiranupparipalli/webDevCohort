
// async-

// fs.writeFile("async.txt", "hey, im async" , (error)=>{
//     if(error) return error

//     console.log("file created successfully!")
// })

// fs.appendFile("async.txt", ". Hope you are doing great!", (error)=>{
//     if(error) return error

//     console.log("APPENDEDFILE- successfully.")
// })

// fs.readFile("async.txt", "utf-8", (error, data)=>{
//     if(error) return error

//     console.log("READ- ",data)
// })

// fs.unlink("async.txt", (error)=>{
//     if(error) return error

//     console.log("FILE- deleted..")
// })

fs.readFile("me.txt", "utf-8", (err) => {
  fs.writeFile("me2.txt", "Hello, im me2.txt.", (err) => {
    fs.appendFile("me2.txt", " Hey, im me.txt", (err, data) => {
      fs.unlink("me.txt", (err) => {
        console.log("ME2.TXT- created");
      });
    });
  });
});
