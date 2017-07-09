const assert = require('assert');
const User = require('../src/user');


describe('deleting a user',()=>{
let joe;
    
    beforeEach((done)=>{
        joe = new User({
          name : 'Joe'  
        });
        joe.save()
        .then(()=>done());
    })
    it('check if model instance is removed',(done)=>{
        joe.remove()
            .then(()=>User.findOne({name:'Joe'}))
            .then((user)=>{
                assert(user === null);
                done();
            });
    });
});