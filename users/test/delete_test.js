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

    it('User class method remove from database',(done)=>{
        User.remove({name:'Joe'})
        .then(()=>{User.findOne({name:'Joe'})
        .then((user)=>{
            assert(user === null);
            done();
        });
        });
    });
    it('class method findOneAndRemove',(done)=>{
        User.findOneAndRemove({name:'Joe'})
        .then(()=>User.findOne({name:'Joe'}))
        .then((user)=>{
            assert(user === null);
            done();
        });
    });
    it('class method findByIdAndRemove',(done)=>{
        User.findByIdAndRemove(joe._id)
        .then(()=>User.findOne({name:'Joe'}))
        .then((user)=>{
            assert(user === null);
            done();
        });
    });
});