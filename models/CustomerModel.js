var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

// Task.getLogin = function getLogin(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT * FROM tb_customer "
//             + " WHERE user_username = " + sql.escape(data.user_username)
//             + " AND user_password = " + sql.escape(data.user_password);
//         console.log(str);

//         sql.query(str, function (err, res) {
//             if (err) {
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                 };
//                 resolve(require);
//             } else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                 };
//                 resolve(require);
//             }
//         });
//     });
// }
Task.getCustomerBy = function getCustomerBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_customer ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getCountCustomer = function getCountCustomer() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT COUNT(customer_code) AS count_customer FROM tb_customer ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getCustomerByCustomerCode = function getCustomerByCustomerCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_customer WHERE customer_code = '" + data.customer_code + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertCustomer = async function insertCustomer(data) {
    const date = new Date()
    const code = 'CT' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCode({ code: code, digit: 3, })

    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_customer (customer_code, customer_name, customer_email, customer_tel, customer_address, customer_image, addby, adddate)"
            + " VALUES ("
            + " '" + last_code + "',"
            + " '" + data.customer_name + "',"
            + " '" + data.customer_email + "',"
            + " '" + data.customer_tel + "',"
            + " '" + data.customer_address + "',"
            + " '" + data.customer_image + "',"
            + " '" + data.addby + "' ,"
            + "NOW()"
            + ") ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateCustomerByCustomerCode = function updateCustomerByCustomerCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_customer  SET "
            + "  customer_companyname = '" + data.customer_companyname + "',"
            + " customer_name = '" + data.customer_name + "',"
            + " customer_address = '" + data.customer_address + "',"
            + " customer_tel = '" + data.customer_tel + "',"
            + " customer_email = '" + data.customer_email + "',"
            + " customer_image = '" + data.customer_image + "',"
            + " updateby = '" + data.updateby + "',"
            + " lastupdate = " + " NOW() "
            + " WHERE customer_code = '" + data.customer_code + "'";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateImageNameByCustomerCode = function updateImageNameByCustomerCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_customer "
            + " SET  customer_image = '" + data.customer_image + "'"
            + " WHERE customer_code = '" + data.customer_code + "'";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}

Task.deleteCustomerByCustomerCode = function deleteCustomerByCustomerCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_customer WHERE customer_code = '" + data.customer_code + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getLastCode = function getLastCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(customer_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_customer "
            + "WHERE customer_code LIKE ('" + data.code + "%') "

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}


module.exports = Task;