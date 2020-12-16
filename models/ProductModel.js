var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getProductBy = function getProductBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_product ";

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
Task.getProductByProductCode = function getProductByProductCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_product WHERE product_code = '" + data.product_code + "' ";
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
Task.insertProduct = async function insertProduct(data) {
    const date = new Date()
    const code = 'PD' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCode({ code: code, digit: 3, })

    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_product ("
            + "product_code, "
            + "product_name, "
            + "product_type, "
            + "product_brand, "
            + "product_models,"
            + "product_number,"
            + "product_price,"
            + "product_image"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.product_name + "', "
            + " '" + data.product_type + "', "
            + " '" + data.product_brand + "', "
            + " '" + data.product_models + "' ,"
            + " '" + data.product_number + "' ,"
            + " '" + data.product_price + "' ,"
            + " '" + data.product_image + "'"
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
Task.updateProductByProductCode = function updateProductByProductCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_product "
            + " SET product_name = '" + data.product_name + "',"
            // + " product_description = '" + data.product_description + "',"
            + " product_type = '" + data.product_type + "',"
            + " product_brand = '" + data.product_brand + "',"
            + " product_models = '" + data.product_models + "',"
            + " product_number = '" + data.product_number + "',"
            + " product_price = '" + data.product_price + "',"
            + " product_image = '" + data.product_image + "' "
            + " WHERE product_code = '" + data.product_code + "'";
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
Task.updateProductNumberByproductCode = function updateProductNumberByproductCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_product "
        // quantity=quantity - จำนวนที่ซื้อ where id = รหัสสินค้า
            + " SET product_number = '" + (data.product_number - data.number )+ "'"
            + " WHERE product_code = '" + data.product_code + "'";
        console.log('product_number',str)
        console.log('product_number',data.product_number)
        console.log('product',data.number)
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
// updateProductNumberByproductCodeAndUptate
Task.updateProductNumberByproductCodeAndUptate = function updateProductNumberByproductCodeAndUptate(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_product "
            + " SET product_number = '" + data.product_number + "'"
            + " WHERE product_code = '" + data.product_code + "'";
        console.log('product_number',str)
        console.log('product_number',data.product_number)
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
Task.deleteProductByProductCode = function deleteProductByProductCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_product WHERE product_code = '" + data.product_code + "' ";
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
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(product_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_product "
            + "WHERE product_code LIKE ('" + data.code + "%') "
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