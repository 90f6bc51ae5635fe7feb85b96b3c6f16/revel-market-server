
var task_license_permission = require('../models/LicensePermissionModel');

module.exports = function (app) {

    app.post('/license-permission/getLicensePermissionByCode',async function (req, res) {
        var result = await task_license_permission.getLicensePermissionByCode(req.body)
        res.send(result)
    })
    app.post('/license-permission/getPermissionUserBy',async function (req, res) {
        var result = await task_license_permission.getPermissionUserBy(req.body)
        res.send(result)
    })

}