import qr from "qr-image"
import fs from "fs"
import data from "./data.js"
import inquirer from "inquirer"

/* 
for(let i = 0; i<data.length;i++){
    var qr_svg = qr.image(data[i].meaning, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`./image/img${i}.png`));
}
*/
inquirer
  .prompt([
    /* Pass your questions in here */
    {
       message : "Enter your URL: ",
       name : "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    console.log(url);

    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`./QR-Data/qr.png`));

    fs.writeFile("./QR-Data/url.txt",url,err=>{
        if (err) throw err;
        console.log("Your file has been saved");
    }) 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });