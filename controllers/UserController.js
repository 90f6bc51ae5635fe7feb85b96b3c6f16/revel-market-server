var UserModel = require('../models/UserModel');

var Task = function (task) {
    this.task = task.task;
};
Task.getUserBy = async function getUserBy(data, result) {
    var userList = await UserModel.getUserBy(data);
    result(userList);
}

module.exports = Task;