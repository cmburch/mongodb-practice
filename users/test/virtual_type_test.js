const assert = require('assert');
const User = require('../src/user');


describe('Virtual Types',()=>{
    it('postCount returns number of post',(done)=>{
           const joe = new User({
            name:'Joe',
            posts:[{title:'PostTitle'}]
        });
        joe.save()
        .then(()=> User.findOne({name: 'Joe'}))
        .then((user)=>{
           assert(user.postCount === 1);
           done(); 
        });
    });
});
