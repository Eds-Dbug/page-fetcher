// get stdin 
const args = process.argv.slice(2);
//console.log(args)
const url = args[0];
const localPath = args[1];
const fs = require('fs');
const request = require('request');

const fileRequest = (url, localPath) => {
request(url, (error, response, body) => {
  if(error){
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  // console.log('response:', error); // Print the error if one occurred
  // content += ;
  
  fs.writeFile(localPath, body, (err) => {
    if(err){
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
  })
  
});
}


fileRequest(url, localPath);