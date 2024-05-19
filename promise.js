const axios = require('axios');
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data.entries;
      listOfEntries.forEach((entry)=>{
        console.log(entry.Category);
      });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
console.log("Before connect URL")
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL")