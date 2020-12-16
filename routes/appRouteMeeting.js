var MeetingController = require('../controllers/MeetingController');
var meeting_model = require('../models/MeetingModel');

module.exports = function (app) {
    app.post('/meeting/getMeetingBy', function (req, res) {
        MeetingController.getMeetingBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingProblemsBy', function (req, res) {
        MeetingController.getMeetingProblemsBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingHiligthBy', function (req, res) {
        MeetingController.getMeetingHiligthBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingProblemsByCode', function (req, res) {
        MeetingController.getMeetingProblemsByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingHiligthByCode', function (req, res) {
        MeetingController.getMeetingHiligthByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getCountMeeting', function (req, res) {
        MeetingController.getCountMeeting(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByMeetingCode', function (req, res) {
        MeetingController.getMeetingByMeetingCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByProblemsCode', function (req, res) {
        MeetingController.getMeetingByProblemsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingImageCompletedWorkCode', function (req, res) {
        MeetingController.getMeetingImageCompletedWorkCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingImageHiligthCode', function (req, res) {
        MeetingController.getMeetingImageHiligthCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingImageNonCompletedWorkCode', function (req, res) {
        MeetingController.getMeetingImageNonCompletedWorkCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByHiligthCode', function (req, res) {
        MeetingController.getMeetingByHiligthCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByCheck', function (req, res) {
        MeetingController.getMeetingByCheck(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/meeting/getMeetingByCheckNotMeeting', function (req, res) {
        MeetingController.getMeetingByCheckNotMeeting(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingPresentByMeetingCode', function (req, res) {
        MeetingController.getMeetingPresentByMeetingCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingProblems', function (req, res) {
        MeetingController.getMeetingProblems(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingHiligth', function (req, res) {
        MeetingController.getMeetingHiligth(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingAll', function (req, res) {
        MeetingController.getMeetingAll(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingPresentByMeetingCodeAndProjectCode', function (req, res) {
        MeetingController.getMeetingPresentByMeetingCodeAndProjectCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingPresentAndUserAndProject', function (req, res) {
        MeetingController.getMeetingPresentAndUserAndProject(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByNextWeekCode', function (req, res) {
        MeetingController.getMeetingByNextWeekCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByCompletedWorkCode', function (req, res) {
        MeetingController.getMeetingByCompletedWorkCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByNonCompletedWorkCode', function (req, res) {
        MeetingController.getMeetingByNonCompletedWorkCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingByAllReminingWorkCode', function (req, res) {
        MeetingController.getMeetingByAllReminingWorkCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingCompletedWork', function (req, res) {
        MeetingController.getMeetingCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingNonCompletedWork', function (req, res) {
        MeetingController.getMeetingNonCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingOldMeeting', function (req, res) {
        MeetingController.getMeetingOldMeeting(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/getMeetingPresentByScoreAndProject', function (req, res) {
        MeetingController.getMeetingPresentByScoreAndProject(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/insertMeeting', async function (req, res) {
        var result = await meeting_model.insertMeeting(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingPresent', async function (req, res) {
        var result = await meeting_model.insertMeetingPresent(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingProblem', async function (req, res) {
        var result = await meeting_model.insertMeetingProblem(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingProblemImage', async function (req, res) {
        var result = await meeting_model.insertMeetingProblemImage(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingHiligth', async function (req, res) {
        var result = await meeting_model.insertMeetingHiligth(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingHiligthImage', async function (req, res) {
        var result = await meeting_model.insertMeetingHiligthImage(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingNextWeek', async function (req, res) {
        var result = await meeting_model.insertMeetingNextWeek(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingCompletedWorkImage', async function (req, res) {
        var result = await meeting_model.insertMeetingCompletedWorkImage(req.body)
        res.send(result)
    })
    app.post('/meeting/insertMeetingNonCompletedWorkImage', async function (req, res) {
        var result = await meeting_model.insertMeetingNonCompletedWorkImage(req.body)
        res.send(result)
    })

    app.post('/meeting/updateMeetingByMeetingCode', function (req, res) {
        MeetingController.updateMeetingByMeetingCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingByProblemsCode', function (req, res) {
        MeetingController.updateMeetingByProblemsCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingByHiligthCode', function (req, res) {
        MeetingController.updateMeetingByHiligthCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingByProblemImageCode', function (req, res) {
        MeetingController.updateMeetingByProblemImageCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingHiligthImage', function (req, res) {
        MeetingController.updateMeetingHiligthImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingProblemsImage', function (req, res) {
        MeetingController.updateMeetingProblemsImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingNextWeek', function (req, res) {
        MeetingController.updateMeetingNextWeek(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingCompletedWork', function (req, res) {
        MeetingController.updateMeetingCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingNonCompletedWork', function (req, res) {
        MeetingController.updateMeetingNonCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingAllRemainingWork', function (req, res) {
        MeetingController.updateMeetingAllRemainingWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/updateMeetingCompletedWorkImage', function (req, res) {
        MeetingController.updateMeetingCompletedWorkImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/updateMeetingNonCompletedWorkImage', function (req, res) {
        MeetingController.updateMeetingNonCompletedWorkImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/updateMeetingScore', function (req, res) {
        MeetingController.updateMeetingScore(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/meeting/deleteMeetingByMeetingode', function (req, res) {
        MeetingController.deleteMeetingByMeetingCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByProblems', function (req, res) {
        MeetingController.deleteMeetingByProblems(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByHiligth', function (req, res) {
        MeetingController.deleteMeetingByHiligth(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByImage', function (req, res) {
        MeetingController.deleteMeetingByImage(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByImageHiligth', function (req, res) {
        MeetingController.deleteMeetingByImageHiligth(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByImageCompletedWork', function (req, res) {
        MeetingController.deleteMeetingByImageCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByImageNonCompletedWork', function (req, res) {
        MeetingController.deleteMeetingByImageNonCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByCompletedWork', function (req, res) {
        MeetingController.deleteMeetingByCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByNonCompletedWork', function (req, res) {
        MeetingController.deleteMeetingByNonCompletedWork(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/meeting/deleteMeetingByMeetingCode', function (req, res) {
        MeetingController.deleteMeetingByMeetingCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}