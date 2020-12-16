var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getOverdueBy = function getOverdueBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_overdue_product ";

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
Task.getProductShowBy = function getProductShowBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_product WHERE product_show = 1 ";

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
Task.getOverdueByOverdueCode = function getOverdueByOverdueCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_overdue_product WHERE overdue_code = '" + data.Overdue_code + "' ";
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

Task.getOverdueByOverdueCodeJoinProduct = function getOverdueByOverdueCodeJoinProduct(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_overdue_product " +
            "LEFT JOIN tb_product ON tb_overdue_product.product_code = tb_product.product_code " +
            "WHERE tb_overdue_product.product_code = '" + data.product_code + "' ";
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
Task.getOverdueAndUserAndCustomere = function getOverdueAndUserAndCustomere(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_overdue_product ";
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
Task.inserOverdue = async function inserOverdue(data) {
    const date = new Date()
    const code = 'OP' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeOverdue({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_overdue_product ("
            + "overdue_product_code,"
            + "overdue_product_user_name,"
            + "overdue_product_customer,"
            + "overdue_product_name,"
            + "overdue_product_brand,"
            + "overdue_product_models,"
            + "overdue_product_number,"
            + "overdue_product_price,"
            + "overdue_product_fines,"
            + "overdue_product_status,"
            + "overdue_product_time,"
            + "overdue_product_date_nigth"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.overdue_product_user_name + "', "
            + " '" + data.overdue_product_customer + "', "
            + " '" + data.overdue_product_name + "', "
            + " '" + data.overdue_product_brand + "' ,"
            + " '" + data.overdue_product_models + "' ,"
            + " '" + data.overdue_product_number + "' ,"
            + " '" + data.overdue_product_price + "' ,"
            + " '" + data.overdue_product_fines + "' ,"
            + " '" + data.overdue_product_status + "' ,"
            + " '" + data.overdue_product_time + "' ,"
            + " '" + data.overdue_product_date_nigth + "'"
            + ") ";
        console.log('str', str)
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
// Task.updateOverdue = function updateOverdue(data) {
//     console.log(data)
//     return new Promise(function (resolve, reject) {
//         var str = " UPDATE tb_overdue_product "
//             + " SET Overdue_user_name = '" + data.Overdue_user_name + "',"
//             + " Overdue_customer_name = '" + data.Overdue_customer_name + "',"
//             + " Overdue_product_name = '" + data.Overdue_product_name + "',"
//             + " Overdue_product_brand = '" + data.Overdue_product_brand + "',"
//             + " Overdue_product_models = '" + data.Overdue_product_models + "',"
//             + " Overdue_product_number = '" + data.Overdue_product_number + "',"
//             + " Overdue_product_price = '" + data.Overdue_product_price + "' "
//             + " Overdue_status = '" + data.Overdue_status + "' "
//             + " Overdue_time = '" + data.Overdue_time + "' "
//             + " date_night = '" + data.date_night + "' "
//             + " WHERE Overdue_code = '" + data.Overdue_code + "'";
//         console.log(str)
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
// Task.deleteRetOverdueByRetOverdueCode = function deleteRetOverdueByRetOverdueCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "DELETE FROM tb_retOverdue WHERE retOverdue_code = '" + data.retOverdue_code + "' ";
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

Task.getLastCodeOverdue = function getLastCodeOverdue(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(overdue_product_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_overdue_product "
            + "WHERE overdue_product_code LIKE ('" + data.code + "%') "
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