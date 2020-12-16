var ProductController = require('../controllers/ProductController');
var product_model = require('../models/ProductModel');

module.exports = function (app) {
    app.post('/product/getProductBy', function (req, res) {
        ProductController.getProductBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/product/getProductShowBy', function (req, res) {
        ProductController.getProductShowBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/product/getProductByProductCode', function (req, res) {
        ProductController.getProductByProductCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    
    app.post('/product/insertProduct', async function (req, res) {
        var result = await product_model.insertProduct(req.body)
        res.send(result)
    })

    app.post('/product/updateProductByProductCode', function (req, res) {
        ProductController.updateProductByProductCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/product/updateProductNumberByproductCodeAndUptate', function (req, res) {
        ProductController.updateProductNumberByproductCodeAndUptate(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/product/updateProductNumberByproductCode', function (req, res) {
        ProductController.updateProductNumberByproductCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/product/deleteProductByProductCode', function (req, res) {
        ProductController.deleteProductByProductCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}