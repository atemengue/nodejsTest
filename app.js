// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutoriel', () => {
//   console.log('Tutoriel event has occurend');
// });


// class Person extends EventEmitter {
//   constructor(name) {
//     super();
//     this._name = name
//   }

//   get name() {
//     return this._name;
//   }
// }

// // let pedro = new Person('Pedro');
// // let regis = new Person('Regis');
// // pedro.on('name',() => {
// //   console.log('my name is ' + pedro.name);
// // })

// // regis.on('name', () => {
// //   console.log('my name is' + regis.name)
// // })


// // const realine = require('readline');
// // const rl = realine.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // })

// // let num1 = Math.floor((Math.random() *10 )+ 1);
// // let num2 = Math.floor((Math.random() *10 )+ 1);
// // let answer = num1 + num2;

// // rl.question(`What is ${num1} + ${num2}? \n`,
// // (userInput)=> {
// //   if(userInput.trim() == answer) {
// //     rl.close();
// //   } else {
// //     rl.setPrompt('Incorrect response please try again\n');
// //     rl.prompt();
// //     rl.on('line', (userInput)=> {
// //       if(userInput.trim() == answer)
// //         rl.close()
// //       else{
// //         rl.setPrompt(`Your answer of ${userInput} is not correct\n`);
// //         rl.prompt();
// //       }  
// //     })
// //   }
// // });

// // rl.on('close', () =>{
// //   console.log('Correct Answer');
// // });


// // create a file 
// // fs.writeFile('example.txt', "this is an example", (err) => {
//   //   if(err)
//   //     console.log(err);
//   //   else {
//     //     console.log('File successfuly createdo')
//     //     fs.readFile('example.txt','utf8', (err, file) => {
//       //       if(err)
//       //         console.log(err)
//       //       else
//       //         console.log(file)
//       //     })
//       //   }
//       // });
      
//       // fs.rename('example.txt','example2.txt',(err) => {
//         //   if(err)
//         //     console.log(err);
//         //   else
//         //     console.log('successfully remaned the file');
//         // })
        
//         // fs.appendFile('example2.txt','Some data being appended', (err) => {
//           //   if(err)
//           //     console.log(err);
//           //   else
//           //     console.log('Successfully appended data to file');
//           // })
          
//           // fs.unlink('example2.txt', (err) => {
//             //   if(err)
//             //     console.log(err);
//             //   else
//             //     console.log('Successfully deleted file');
//             // })
            
//             // file System modul
//             // fs.mkdir('tutorial',(err) => {
//               //   if(err)
//               //     console.log(err);
//               //   else{
//                 //   fs.writeFile('./tutorial/example.txt', '123', (err)=> {
//                   //     if (err)
//                   //       console.log(err);
//                   //     else {
//                     //       console.log('Successfully created file');
//                     //     }
//                     //   })
//                     //   }
//                     // })
                    
//                     // fs.unlink('./tutorial/example.txt', (err)=> {
//                       //   if(err){
//                         //     console.log(err);
//                         //   } else {
//                           //     fs.rmdir('tutorial', (err) => {
//                             //       if(err){
//                               //         console.log(err);
//                               //       } else {
//                                 //         console.log('deleted folder');
//                                 //       }
//                                 //     })
//                                 //   }
//                                 // })
                                
//                                 // fs.rmdir('tutorial', (err) => {
//                                   //   if(err) {
//                                     //     console.log(err);
//                                     //   } else {
//                                       //     console.log('deleted folder');
//                                       //   }
//                                       // })
                                      
//                                       fs.readdir('example', (err, files)=> {
//                                           if(err){
//                                               console.log(err);
//                                             } else {
//                                                 for(let file of files){
//                                                     fs.unlink('./example/' + file, (err) => {
//                                                         if(err)
//                                                           console.log(err);
//                                                         else
//                                                           console.log('successfully deleted file');
//                                                       })
//                                                     }
//                                                   }
// })

// const fs = require('fs');

// const readStream = fs.createReadStream('./example.txt', 'utf-8');
// const writeStream = fs.WriteStream('./example2.txt');
// readStream.on('data', (chunk) => {
//      writeStream.write(chunk)
// });


// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf-8');
// const writeStream = fs.WriteStream('./example2.txt.gzp');
// readStream.pipe(gzip).pipe(writeStream);

// const _  = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana",1,4);
// console.log(example);


// const express = require('express');
// const app = express();


// app.get('/', (request, response) => {
//   response.send('Hello World');
// })

// app.get('/example', (request, response) => [
//   response.send('hiting example route')
// ])


// app.get('/example/:name/:age', (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.params.name + " : " + req.params.age);
// })
// app.listen(3000)

// //add query with ?tutorial: 'paramstutorial'}
// // multiple query add & after first query string


//SERVING STATIC FILES WITH EXPRESS

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Joi = require('joi');

app.use('/static', express.static(path.join(__dirname, 'static')));
// use ejs template
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

//ADD APP POST

// app.post('/', (req,res)=> {
//   console.log(req.body);
//   res.json({success: true})
// })

app.post('/',(req, res)=> {
  console.log(req.body);
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
  });

  Joi.validate(req.body, schema,(err, result) =>{
    if(err) {
      console.log(err)
      res.send('an error has occured');
    }

    console.log(result);
    res.send('successfull posted data')
  })
  // // database work here
  // res.send('successfully posted data');
})

app.listen(3000);