var connection = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.getLicenseBy = function getLicenseBy(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT * FROM `tb_license` "
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

Task.getLicenseMaxCode = function getLicenseMaxCode(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(license_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS max_code "
            + "FROM tb_license "
            + "WHERE license_code LIKE ('" + data.code + "%') "

        connection.query(sql, function (err, res) {
            if (err) {
                const require = { data: '', require: false, err: err }
                resolve(require)
            } else {
                const require = { data: res[0].max_code, require: true }
                resolve(require)
            }
        })
    })
}

Task.insertLicense = async function insertLicense(data) {
    const license_code = await this.getLicenseMaxCode({ code: 'L', digit: 4 })
    return new Promise(function (resolve) {
        var sql = " "
            + "INSERT INTO tb_license ( "
            + " license_code, "
            + " license_name) "
            + " VALUES ( "
            + "'" + license_code.data + "',"
            + "'" + data.license_name + "' "
            + " ) "

        connection.query(sql, function (err, res) {
            if (err) {
                const require = { data: [], require: false, err: err }
                resolve(require)
            } else {
                const require = { data: res, license_code: license_code.data, require: true }
                resolve(require)
            }
        })
    })
}

Task.getLicenseByCode = function getLicenseByCode(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT * FROM `tb_license` WHERE license_code = '" + data.license_code + "'"
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

Task.updateLicense = function updateLicense(data) {
    return new Promise(function (resolve) {
        var sql = " UPDATE tb_license SET "
            + " license_name = '" + data.license_name + "'"
            + " WHERE license_code = '" + data.license_code + "'; "

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

Task.deleteLicenseByCode = function deleteLicenseByCode(data) {
    return new Promise(function (resolve) {
        var sql = "DELETE FROM tb_license WHERE  license_code = '" + data.license_code + "'"
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