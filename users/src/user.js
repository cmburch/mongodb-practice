const mongoose = require('mongoose'),
      PostSchema = require('./post'),
      Schema   = mongoose.Schema;


const UserSchema = new Schema({
    name:{type:String,
         validate:{
             validator:(name)=> name.length > 2,
             message: 'Name must be longer than 2 characters.'
         },
          required: [true,'Name is required.']

    },
    postCount: Number,
    posts:[PostSchema]
});

UserSchema.virtual('postCount').get(function(){

});

const User = mongoose.model('user',UserSchema);


module.exports = User;