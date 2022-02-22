const Note = require("../entity/Note");
module.exports = {
    allNote: async(parent, args, {models}) => {
       return await models.Note.find();
    },
    myNote: async (parent, args, {models,user}) => {
        return await models.Note.find({author: user.id});
    },
    me: async (parent, args, {models,user}) => {
        return await models.User.findById(user.id);
    }
}