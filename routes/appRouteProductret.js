var ProductretController = require('../controllers/ProductretController');
var productret_model = require('../models/ProductretModel');

module.exports = function (app) {
    app.post('/productret/getProductretBy', function (req, res) {
        ProductretController.getProductretBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/productret/getProductretByProductretCode', function (req, res) {
        ProductretController.getProductretByProductretCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/productret/getProductretByProductretCodeJoinProduct', function (req, res) {
        ProductretController.getProductretByProductretCodeJoinProduct(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/productret/getProductretAndUserAndCustomere', function (req, res) {
        ProductretController.getProductretAndUserAndCustomere(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    
    app.post('/productret/inserProductret', async function (req, res) {
        var result = await productret_model.inserProductret(req.body)
        res.send(result)
    })

    app.post('/productret/updateProductret', function (req, res) {
        ProductretController.updateProductret(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/productret/deleteRetProductretByRetProductretCode', function (req, res) {
        ProductretController.deleteRetProductretByRetProductretCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}