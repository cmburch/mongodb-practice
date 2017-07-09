const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done)=> {
    mongoose.connect('mongodb://localhost/user_test');
    mongoose.connection
    .once('open',()=> {done();})
    .on('error',(error)=>{
        console.warn('Warning',error);
    });
});


    // hook method deletes users from database before any test is run
    beforeEach((done)=>{
        mongoose.connection.collections.users.drop(()=>{
            // ready to run next test
            done();
        });
    });