var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getNewsBy = function getNewsBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news ";
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
Task.getNewsShowBy = function getNewsShowBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news WHERE news_show = 1 ";
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
Task.getNewsByNewsCode = function getNewsByNewsCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news WHERE news_code = '" + data.news_code + "' ";
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
Task.insertNews = function insertNews(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_news (news_code, news_title, news_date, news_deciption, news_detail, news_show)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.news_title + "', "
            + " '" + data.news_date + "', "
            + " '" + data.news_deciption + "', "
            + " '" + data.news_detail + "', "
            + " '" + data.news_show + "') ";

        console.log("insertNews>>", str);
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

Task.updateNewsByNewsCode = function updateNewsByNewsCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_news "
            + " SET news_title = '" + data.news_title + "',"
            + " news_date = '" + data.news_date + "',"
            + " news_deciption = '" + data.news_deciption + "',"
            + " news_detail = '" + data.news_detail + "',"
            + " news_show = '" + data.news_show + "'"
            + " WHERE news_code = '" + data.news_code + "'";

        console.log("insertNews>>", str);
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
Task.deleteNewsByNewsCode = function deleteNewsByNewsCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_news WHERE news_code = '" + data.news_code + "' ";
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

Task.getLastCode = function getLastCode() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(CONCAT('N',LPAD( SUBSTRING(max(news_code), 2, 5)+1,4,'0')), 'N0001')   AS last_code  FROM `tb_news`";
        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                resolve(err);
            }
            else {
                resolve(res[0].last_code);
            }
        });
    });
}
module.exports = Task;