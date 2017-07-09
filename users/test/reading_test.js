const assert = require('assert');
const User = require('../src/user');

describe('read users out of the database', ()=>{
    let joe;
    it('find all user name joe',()=>{

        beforeEach((done)=>{
            joe = new User({
                name:'Joe'
            });
            joe.save()
            .then(()=>{
                done()
            });
        });
    });
});
