
const transaction = require('../models/BaseTransaction')
const license_model = require('../models/LicenseModel');
const license_permission_model = require('../models/LicensePermissionModel');

module.exports = function (app) {

    app.post('/license/getLicenseBy',async function (req, res) {
        var result = await license_model.getLicenseBy(req.body)
        res.send(result)
    })
    app.post('/license/insertLicense',async function (req, res) {
        transaction.executeTransaction(async () => {
            const res = {}
            var data = { ...req.body }
            res.tran1 = await license_model.insertLicense(data)
            data = { ...data, ...{ license_code: res.tran1.license_code } }

            res.tran2 = await license_permission_model.insertLicensePermission(data)
            

            if (res.tran1.require && res.tran2.require  ) {
                return { res: res }
            } else {
                console.log(" query error :: ", res);
                return { error: true, res: res }
            }
        }).then((result) => {
            res.send(result)
        })
      
    })
    app.post('/license/getLicenseByCode',async function (req, res) {
        var result = await license_model.getLicenseByCode(req.body)
        res.send(result)
    })

    app.post('/license/updateLicense',async function (req, res) {
        transaction.executeTransaction(async () => {
            const res = {}
            var data = { ...req.body }
            res.tran1 = await license_model.updateLicense(data)
            res.tran2 = await license_permission_model.updateLicensePermission(data)
            
            if (res.tran1.require && res.tran2.require  ) {
                return { res: res }
            } else {
                console.log(" query error :: ", res);
                return { error: true, res: res }
            }
        }).then((result) => {
            res.send(result)
        })
      
    })
    
    app.post('/license/deleteLicenseByCode',async function (req, res) {
        var result = await license_model.deleteLicenseByCode(req.body)
        res.send(result)
    })

};


