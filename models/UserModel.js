var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getUserBy = function getUserBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_user ";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}

module.exports = Task;