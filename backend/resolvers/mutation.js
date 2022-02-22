const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {AuthenticationError} = require("apollo-server");
require('dotenv').config();

module.exports = {
    newNote: async(parent, args, {models, user}) => {
        if(!user){
            throw new AuthenticationError('Вы не вошли в аккаунт');
        }
        return await models.Note.create({
            desc: args.desc,
            name: args.name,
            author: mongoose.Types.ObjectId(user.id),
        });
    },
    changeUser: async(parent, {username, password}, {models, user}) => {
        if(!user){
            throw new AuthenticationError('Вы не вошли в аккаунт');
        }
        if(!username && !password){
            throw new AuthenticationError('Вы не вошли в аккаунт');
        }
        if(password && username){
            const hashed = await bcrypt.hash(password, 10);
            const user1 = await models.User.findById(user.id);
            await models.User.updateOne({_id: user1._id}, {nickname: username, password: hashed});
            return true;
        }else if(password){
            const user1 = await models.User.findById(user.id);
            const hashed = await bcrypt.hash(password, 10);
            await models.User.updateOne({_id: user1._id}, {password: hashed});
            return true;
        }else if(username){
            const user1 = await models.User.findById(user.id);
            await models.User.updateOne({_id: user1._id}, {nickname: username});
            return false;
        }
    },
    register: async(parent, { username, password }, {models}) => {
        username = username.trim().toLowerCase();
        // hash the password
        const hashed = await bcrypt.hash(password, 10);
        try {
            const user = await models.User.create({
                nickname: username,
                password: hashed
            });
            // create and return the json web token
            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        } catch (err) {
            // if there's a problem creating the account, throw an error
            throw new Error('Error creating account');
        }
    },
    login: async(parent, { username, password }, {models}) => {

        const user = await models.User.findOne({
            $or: [{ nickname: username} ]
        });

        // if no user is found, throw an authentication error
        if (!user) {
            throw new AuthenticationError('Error signing in');
        }

        // if the passwords don't match, throw an authentication error
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new AuthenticationError('Error signing in');
        }

        // create and return the json web token
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    }
}