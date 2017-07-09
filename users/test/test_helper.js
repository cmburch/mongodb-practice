const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/user_test');
mongoose.connection
    .once('open',()=> console.log('good to go'))
    .on('error',(error)=>{
        console.warn('Warning',error);
    });


    // hook method deletes users from database before any test is run
    beforeEach((done)=>{
        mongoose.connection.collections.users.drop();
            // ready to run next test
            done();
    });