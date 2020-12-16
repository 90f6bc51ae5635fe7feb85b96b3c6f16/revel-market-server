var connection = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getManuBy = function getManuBy(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT * FROM tb_menu "
        connection.query(sql, function (err, res) {
            if (err) {
                const require = { data: [], require: false, err: err }
                resolve(require)
            } else {
                const require = { data: res, require: true }
                resolve(require)
            }
        })
    })
}

module.exports = Task;