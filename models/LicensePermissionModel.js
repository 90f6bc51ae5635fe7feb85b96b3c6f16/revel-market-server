var connection = require('./BaseModel')

var Task = function (task) {
    this.task = task.task
    this.status = task.status
    this.created_at = new Date()
}


Task.getLicensePermissionByCode = function getLicensePermissionByCode(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT * FROM tb_license_permission "
            + "WHERE license_code = '" + data.license_code + "' "
            + "ORDER BY menu_code ASC"

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
Task.getPermissionUserBy = function getPermissionUserBy(data) {
    return new Promise(function (resolve) {
        var sql = "SELECT tb2.*,tb1.permission_add,tb1.permission_approve,tb1.permission_cancel,tb1.permission_delete,tb1.permission_edit,tb1.permission_view FROM `tb_license_permission` AS tb1"
            + " LEFT JOIN tb_menu AS tb2 ON tb1.menu_code = tb2.menu_code"
            + " WHERE license_code = '" + data.license_code + "'"
            + " ORDER BY tb1.menu_code ASC"

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

Task.insertLicensePermission = function insertLicensePermission(data) {

    let {
        license_code,
        manus
    } = data

    return new Promise(function (resolve) {
        var sql = " "
        manus.forEach((item, idx) => {
            sql += "INSERT INTO tb_license_permission ( "
                + "license_permission_code, "
                + "license_code, "
                + "menu_code, "
                + "permission_view, "
                + "permission_add,"
                + "permission_edit,"
                + "permission_delete ) VALUES "
                + "( "
                + "(SELECT CONCAT('" + license_code + "',DATE_FORMAT(NOW(),'%H%i'),'" + (idx + 1) + "')),"
                + "'" + license_code + "', "
                + "'" + item.menu_code + "', "
                + "'" + item.permission_view + "', "
                + "'" + item.permission_add + "', "
                + "'" + item.permission_edit + "', "
                + "'" + item.permission_delete + "' "
                + " ); "
        })
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

Task.updateLicensePermission = function updateLicensePermission(data) {
    let {
        license_code,
        manus
    } = data
    return new Promise(function (resolve) {
        var sql = ""
        manus.forEach((item, idx) => {
            if (item.license_permission_code == '' ||  item.license_permission_code == undefined){

        sql += "INSERT INTO tb_license_permission ( "
            + "license_permission_code, "
            + "license_code, "
            + "menu_code, "
            + "permission_view, "
            + "permission_add,"
            + "permission_edit,"
            + "permission_delete ) VALUES "
            + "( "
            + "(SELECT CONCAT('" + license_code + "',DATE_FORMAT(NOW(),'%H%i'),'" + (idx + 1) + "')),"
            + "'" + license_code + "', "
            + "'" + item.menu_code + "', "
            + "'" + item.permission_view + "', "
            + "'" + item.permission_add + "', "
            + "'" + item.permission_edit + "', "
            + "'" + item.permission_delete + "' "
            + " ); "
        }else{
            sql += "UPDATE tb_license_permission SET "
            + "license_code = '" + item.license_code + "',"
            + "menu_code = '" + item.menu_code + "',"
            + "permission_view = '" + item.permission_view + "',"
            + "permission_add = '" + item.permission_add + "',"
            + "permission_edit = '" + item.permission_edit + "',"
            + "permission_delete = '" + item.permission_delete + "' "
            + "WHERE license_permission_code = '" + item.license_permission_code + "'; "
        }
    })
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

module.exports = Task