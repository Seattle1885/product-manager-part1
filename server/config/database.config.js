const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product-manager', {
    //add options
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    
.then(() => console.log('you are in the MainFrame...'))//next a promise to check connection
.catch((err) => console.log('Not connected',err))//if there is an error, log it.