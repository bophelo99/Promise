const axios = require('axios');
const connectToURL = async (url) => {
    try {
        const response = await axios.get(url);
        const listOfEntries = response.data.entries;
        listOfEntries.forEach((entry) => {
            console.log(entry.Category);
        });
    } catch (error) {
        console.error(error.toString());
    }
}
console.log("Before connect URL");
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL");