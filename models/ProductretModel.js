var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getProductretBy = function getProductretBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_return_product ";

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
Task.getProductretByProductretCode = function getProductretByProductretCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_return_product WHERE productret_code = '" + data.productret_code + "' ";
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

Task.getProductretByProductretCodeJoinProduct = function getProductretByProductretCodeJoinProduct(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_return_product " +
            "LEFT JOIN tb_product ON tb_return_product.product_code = tb_product.product_code " +
            "WHERE tb_return_product.product_code = '" + data.product_code + "' ";
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
Task.getProductretAndUserAndCustomere = function getProductretAndUserAndCustomere(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_return_product ";
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
Task.inserProductret = async function inserProductret(data) {
    const date = new Date()
    const code = 'PR' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeProductret({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_return_product ("
            + "return_product_code,"
            + "return_product_user_name,"
            + "return_product_customer,"
            + "return_product_name,"
            + "return_product_brand,"
            + "return_product_models,"
            + "return_product_number,"
            + "return_product_price,"
            + "return_product_status,"
            + "return_product_time,"
            + "return_product_date_night"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.return_product_user_name + "', "
            + " '" + data.return_product_customer + "', "
            + " '" + data.return_product_name + "', "
            + " '" + data.return_product_brand + "' ,"
            + " '" + data.return_product_models + "' ,"
            + " '" + data.return_product_number + "' ,"
            + " '" + data.return_product_price + "' ,"
            + " '" + data.return_product_status + "' ,"
            + " '" + data.return_product_time + "' ,"
            + " '" + data.return_product_date_night + "'"
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
// Task.updateProductret = function updateProductret(data) {
//     console.log(data)
//     return new Promise(function (resolve, reject) {
//         var str = " UPDATE tb_return_product "
//             + " SET Productret_user_name = '" + data.Productret_user_name + "',"
//             + " Productret_customer_name = '" + data.Productret_customer_name + "',"
//             + " Productret_product_name = '" + data.Productret_product_name + "',"
//             + " Productret_product_brand = '" + data.Productret_product_brand + "',"
//             + " Productret_product_models = '" + data.Productret_product_models + "',"
//             + " Productret_product_number = '" + data.Productret_product_number + "',"
//             + " Productret_product_price = '" + data.Productret_product_price + "' "
//             + " Productret_status = '" + data.Productret_status + "' "
//             + " Productret_time = '" + data.Productret_time + "' "
//             + " date_night = '" + data.date_night + "' "
//             + " WHERE Productret_code = '" + data.Productret_code + "'";
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
// Task.deleteRetProductretByRetProductretCode = function deleteRetProductretByRetProductretCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "DELETE FROM tb_retProductret WHERE retProductret_code = '" + data.retProductret_code + "' ";
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

Task.getLastCodeProductret = function getLastCodeProductret(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(return_product_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_return_product "
            + "WHERE return_product_code LIKE ('" + data.code + "%') "
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