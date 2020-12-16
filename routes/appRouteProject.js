var ProjectController = require('../controllers/ProjectController');
var project_model = require('../models/ProjectModel');

module.exports = function (app) {
    app.post('/project/getProjectBy', function (req, res) {
        ProjectController.getProjectBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getCountProject', function (req, res) {
        ProjectController.getCountProject(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectByProjectCode', function (req, res) {
        ProjectController.getProjectByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectUserByProjectCode', function (req, res) {
        ProjectController.getProjectUserByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectUserByProjectByCodeUser', function (req, res) {
        ProjectController.getProjectUserByProjectByCodeUser(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectUserByProjectByCode', function (req, res) {
        ProjectController.getProjectUserByProjectByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectFileByProjectCode', function (req, res) {
        ProjectController.getProjectFileByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/getProjectScopeByProjectCode', function (req, res) {
        ProjectController.getProjectScopeByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/insertProject', async function (req, res) {
        var result = await project_model.insertProject(req.body)
        res.send(result)
    })
    app.post('/project/insertProjectUser', async function (req, res) {
        var result = await project_model.insertProjectUser(req.body)
        res.send(result)
    })
    app.post('/project/insertRemoveScope', async function (req, res) {
        var result = await project_model.insertRemoveScope(req.body)
        res.send(result)
    })
    app.post('/project/insertFile', async function (req, res) {
        var result = await project_model.insertFile(req.body)
        res.send(result)
    })
    app.post('/project/insertProjectScope', async function (req, res) {
        var result = await project_model.insertProjectScope(req.body)
        res.send(result)
    })
    app.post('/project/updateProjectByProjectCode', function (req, res) {
        ProjectController.updateProjectByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/project/updateProjectScopeByProjectCode', function (req, res) {
        ProjectController.updateProjectScopeByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/project/updateImageNameByProjectCode', function (req, res) {
        ProjectController.updateImageNameByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/project/deleteProjectByProjectCode', function (req, res) {
        ProjectController.deleteProjectByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/project/deleteProjectUserByProjectCode', function (req, res) {
        ProjectController.deleteProjectUserByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/deleteProjectFileByProjectCode', function (req, res) {
        ProjectController.deleteProjectFileByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/project/deleteProjectScopeByProjectCode', function (req, res) {
        ProjectController.deleteProjectScopeByProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}