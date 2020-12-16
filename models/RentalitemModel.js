var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getRentalitemBy = function getRentalitemBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_rentalitem ";

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
Task.getRentalitemByRentalitemCode = function getRentalitemByRentalitemCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_rentalitem WHERE rentalitem_code = '" + data.rentalitem_code + "' ";
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

Task.getRentalitemByRentalitemCodeJoinProduct = function getRentalitemByRentalitemCodeJoinProduct(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_rentalitem " +
            "LEFT JOIN tb_product ON tb_rentalitem.product_code = tb_product.product_code " +
            "WHERE tb_rentalitem.product_code = '" + data.product_code + "' ";
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
Task.getRentalitemAndUserAndCustomere = function getRentalitemAndUserAndCustomere(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_rentalitem ";
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
Task.inserRentalitem = async function inserRentalitem(data) {
    const date = new Date()
    const code = 'RT' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeRentalitem({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_rentalitem ("
            + "rentalitem_code,"
            + "product_code,"
            + "rentalitem_user_name,"
            + "rentalitem_customer_name,"
            + "rentalitem_product_name,"
            + "rentalitem_product_brand,"
            + "rentalitem_product_models,"
            + "rentalitem_product_number,"
            + "rentalitem_product_price,"
            + "rentalitem_status,"
            + "rentalitem_time,"
            + "date_night"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.product_code + "', "
            + " '" + data.rentalitem_user_name + "', "
            + " '" + data.rentalitem_customer_name + "', "
            + " '" + data.rentalitem_product_name + "', "
            + " '" + data.rentalitem_product_brand + "' ,"
            + " '" + data.rentalitem_product_models + "' ,"
            + " '" + data.rentalitem_product_number + "' ,"
            + " '" + data.rentalitem_product_price + "' ,"
            + " '" + data.rentalitem_status + "' ,"
            + " '" + data.rentalitem_time + "' ,"
            + " '" + data.date_night + "'"
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
Task.updateRentalitem = function updateRentalitem(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_rentalitem "
            + " SET rentalitem_user_name = '" + data.rentalitem_user_name + "',"
            + " rentalitem_customer_name = '" + data.rentalitem_customer_name + "',"
            + " rentalitem_product_name = '" + data.rentalitem_product_name + "',"
            + " rentalitem_product_brand = '" + data.rentalitem_product_brand + "',"
            + " rentalitem_product_models = '" + data.rentalitem_product_models + "',"
            + " rentalitem_product_number = '" + data.rentalitem_product_number + "',"
            + " rentalitem_product_price = '" + data.rentalitem_product_price + "' "
            + " rentalitem_status = '" + data.rentalitem_status + "' "
            + " rentalitem_time = '" + data.rentalitem_time + "' "
            + " date_night = '" + data.date_night + "' "
            + " WHERE rentalitem_code = '" + data.rentalitem_code + "'";
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
Task.deleteRentalitemByRentalitemCode = function deleteRentalitemByRentalitemCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_rentalitem WHERE rentalitem_code = '" + data.rentalitem_code + "' ";
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

Task.getLastCodeRentalitem = function getLastCodeRentalitem(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(rentalitem_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_rentalitem "
            + "WHERE rentalitem_code LIKE ('" + data.code + "%') "
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