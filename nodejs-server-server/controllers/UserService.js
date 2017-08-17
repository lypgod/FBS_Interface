'use strict';

exports.addUser = function (args, res, next) {
    /**
     * Create user
     * This can only be done by the logged in user.
     *
     * user User Created user object
     * returns inline_response_200
     **/
    var examples = {};
    examples['application/json'] = {
        "password": "aeiou",
        "id": 0,
        "userName": "aeiou"
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.createUsersWithList = function (args, res, next) {
    /**
     * Creates list of users with given input array
     *
     *
     * users Users List of user object
     * no response value expected for this operation
     **/
    res.end();
}

exports.deleteUser = function (args, res, next) {
    /**
     * Delete user
     * This can only be done by the logged in user.
     *
     * userName String The name that needs to be deleted
     * no response value expected for this operation
     **/
    res.end();
}

exports.getAllUsers = function (args, res, next) {
    /**
     * Get all user list
     *
     *
     * returns List
     **/
    var examples = {};
    examples['application/json'] = [
        {
            "id" : "1",
            "userName": "user44444",
            "password": "password2"
        },

        {
            "id" : "2",
            "userName": "user3",
            "password": "password3"
        }
    ];
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.getUserByName = function (args, res, next) {
    /**
     * Get user by user name
     *
     *
     * userName String The name that needs to be fetched. Use user1 for testing.
     * returns inline_response_200
     **/
    var examples = {};
    examples['application/json'] = {
        "password": "aeiou",
        "id": 0,
        "userName": "aeiou"
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.loginUser = function (args, res, next) {
    /**
     * Logs user into the system
     *
     *
     * userName String The user name for login
     * password String The password for login in clear text
     * returns String
     **/
    var examples = {};
    examples['application/json'] = "aeiou";
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.logoutUser = function (args, res, next) {
    /**
     * Logs out current logged in user session
     *
     *
     * no response value expected for this operation
     **/
    res.end();
}

exports.updateUser = function (args, res, next) {
    /**
     * Updated user
     * This can only be done by the logged in user.
     *
     * userName String name that need to be updated
     * body Body Updated user object
     * returns inline_response_200
     **/
    var examples = {};
    examples['application/json'] = {
        "password": "aeiou",
        "id": 0,
        "userName": "aeiou"
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

