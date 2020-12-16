var manu_model = require('../models/ManuModel');

module.exports = function (app) {
    app.post('/menu/getManuBy',async function (req, res) {
        var result = await manu_model.getManuBy(req.body)
        res.send(result)
    })
};