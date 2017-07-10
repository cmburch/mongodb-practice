const assert = require('assert');
const User = require('../src/user');


describe('Updating records',()=>{
let joe;

    beforeEach((done)=>{
        joe = new User({name:'Joe'});
        joe.save()
        .then(()=>done());

    });
    it('instance type using set and save',(done)=>{
        console.log(joe);
        joe.set('name','Alex');
        console.log(joe);
        done();
    })

});