var RentalitemController = require('../controllers/RentalitemController');
var rentalitem_model = require('../models/RentalitemModel');

module.exports = function (app) {
    app.post('/rentalitem/getRentalitemBy', function (req, res) {
        RentalitemController.getRentalitemBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/rentalitem/getRentalitemByRentalitemCode', function (req, res) {
        RentalitemController.getRentalitemByRentalitemCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/rentalitem/getRentalitemByRentalitemCodeJoinProduct', function (req, res) {
        RentalitemController.getRentalitemByRentalitemCodeJoinProduct(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/rentalitem/getRentalitemAndUserAndCustomere', function (req, res) {
        RentalitemController.getRentalitemAndUserAndCustomere(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    
    app.post('/rentalitem/inserRentalitem', async function (req, res) {
        var result = await rentalitem_model.inserRentalitem(req.body)
        res.send(result)
    })

    app.post('/rentalitem/updateRentalitem', function (req, res) {
        RentalitemController.updateRentalitem(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/rentalitem/deleteRentalitemByRentalitemCode', function (req, res) {
        RentalitemController.deleteRentalitemByRentalitemCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}