const assert = require('assert');
const User = require('../src/user');


describe('validating a user',()=>{

it('requires a user name',(done)=>{
   const user = new User({name: undefined});
   const validationResult = user.validateSync(); 
   const message = validationResult.errors.name.message;
   //es6 shortcut  const {message} = validationResult.errors.name;

   assert(message === 'Name is required.');
   done();

    });

    it('requires a user\'s name longer than 2 characters',(done)=>{
        const user = new User({ name:'Al'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;

        assert(message === 'Name must be longer than 2 characters.');
        done();
    });

});