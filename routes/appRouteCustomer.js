var customerController = require('../controllers/customerController');

var customer_model = require('../models/CustomerModel');

module.exports = function (app) {
    // app.post('/customer/getLogin', function (req, res) {    //  Not Controller
    //     customerController.getLogin(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })
    app.post('/customer/getCustomerBy', function (req, res) {
        customerController.getCustomerBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/customer/getCountCustomer', function (req, res) {
        customerController.getCountCustomer(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/customer/getCustomerByCustomerCode', function (req, res) {
        customerController.getCustomerByCustomerCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/customer/insertCustomer', async function (req, res) {
        var result = await customer_model.insertCustomer(req.body)
        res.send(result)
    })
    app.post('/customer/updateCustomerByCustomerCode', function (req, res) {
        customerController.updateCustomerByCustomerCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/updateImageNameByCustomerCode', function (req, res) {
        customerController.updateImageNameByCustomerCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/deleteCustomerByCustomerCode', function (req, res) {
        customerController.deleteCustomerByCustomerCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}