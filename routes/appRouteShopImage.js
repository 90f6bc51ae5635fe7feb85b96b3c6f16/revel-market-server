var ShopImageController = require('../controllers/ShopImageController');

module.exports = function (app) {
    app.post('/shop/getShopImageBy', function (req, res) {
        console.log('/shop/getShopImageBy', req.body)
        ShopImageController.getShopImageBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/getShopImageByShopImageCode', function (req, res) {
        console.log('/shop/getShopImageByShopImageCode', req.body)
        ShopImageController.getShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/insertShopImage', function (req, res) {
        console.log('/shop/insertShopImage', req.body)
        ShopImageController.insertShopImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/updateShopImageByShopImageCode', function (req, res) {
        console.log('/shop/updateShopImageByShopImageCode', req.body)
        ShopImageController.updateShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/shop/deleteShopImageByShopImageCode', function (req, res) {
        console.log('/shop/deleteShopImageByShopImageCode', req.body)
        ShopImageController.deleteShopImageByShopImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}