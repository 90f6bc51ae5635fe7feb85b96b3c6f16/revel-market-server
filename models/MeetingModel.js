var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};


Task.getMeetingBy = function getMeetingBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting ORDER BY meeting_datetime DESC ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingProblemsBy = function getMeetingProblemsBy() {
    return new Promise(function (resolve, reject) {
       var str = "SELECT * FROM tb_meeting_problems " ;
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingHiligthBy = function getMeetingHiligthBy() {
    return new Promise(function (resolve, reject) {
       var str = "SELECT * FROM tb_meeting_hiligth " ;
        // "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code "
        // "GROUP BY tb_meeting_hiligth.meeting_hiligth_code" ;
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingProblemsByCode = function getMeetingProblemsByCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
       var str = "SELECT * FROM tb_meeting_problems " +
       "LEFT JOIN tb_meeting_problems_image ON tb_meeting_problems.meeting_problems_code = tb_meeting_problems_image.meeting_problems_code "+
       "WHERE tb_meeting_problems.meeting_problems_code = '" + data.meeting_problems + "' ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingHiligthByCode = function getMeetingHiligthByCode(data) {
    console.log('meeting_hiligth',data)
    return new Promise(function (resolve, reject) {
       var str =  "SELECT * FROM tb_meeting_hiligth " +
        "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code "+
        "WHERE tb_meeting_hiligth.meeting_hiligth_code = '" + data.meeting_hiligth + "' ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getCountMeeting = function getCountMeeting() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT COUNT(meeting_code) AS count_meeting FROM tb_meeting";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByMeetingCode = function getMeetingByMeetingCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting WHERE meeting_code = '" + data.meeting_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByProblemsCode = function getMeetingByProblemsCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_problems " +
            "LEFT JOIN tb_meeting_problems_image ON tb_meeting_problems.meeting_problems_code = tb_meeting_problems_image.meeting_problems_code " +
            "WHERE tb_meeting_problems.meeting_problems_code = '" + data.meeting_problem_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByHiligthCode = function getMeetingByHiligthCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_hiligth " +
            "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code " +
            "WHERE tb_meeting_hiligth.meeting_hiligth_code = '" + data.meeting_hiligth_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByCheck = function getMeetingByCheck(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present " +
            "WHERE project_code = '" + data.project_code + "'" +
            "AND meeting_code = '" + data.meeting_code + "'" +
            "AND user_code = '" + data.user_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByCheckNotMeeting = function getMeetingByCheckNotMeeting(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present " ;
            // "WHERE project_code = '" + data.project_code + "'" +
            // "AND user_code = '" + data.user_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingPresentByMeetingCode = function getMeetingPresentByMeetingCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present " +
            "WHERE meeting_code = '" + data.meeting_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingProblems = function getMeetingProblems(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_problems " +
            "LEFT JOIN tb_meeting_present ON tb_meeting_problems.meeting_present_code = tb_meeting_present.meeting_present_code " +
            "LEFT JOIN tb_meeting_problems_image ON tb_meeting_problems.meeting_problems_code = tb_meeting_problems_image.meeting_problems_code " +
            "WHERE tb_meeting_problems.meeting_present_code = '" + data.meeting_present_code + "'";
            console.log('str',str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingHiligth = function getMeetingHiligth(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_hiligth " +
            "LEFT JOIN tb_meeting_present ON tb_meeting_hiligth.meeting_present_code = tb_meeting_present.meeting_present_code " +
            "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code " +
            "WHERE tb_meeting_hiligth.meeting_present_code = '" + data.meeting_present_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingAll = function getMeetingAll(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present " +
            "LEFT JOIN tb_meeting_problems ON tb_meeting_present.meeting_present_code = tb_meeting_problems.meeting_present_code " +
            "LEFT JOIN tb_meeting_problems_image ON tb_meeting_problems.meeting_problems_code = tb_meeting_problems_image.meeting_problems_code " +
            "LEFT JOIN tb_meeting_hiligth ON tb_meeting_present.meeting_present_code = tb_meeting_hiligth.meeting_present_code " +
            "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code " +
            "WHERE tb_meeting_present.meeting_present_code = '" + data.meeting_present_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingPresentByMeetingCodeAndProjectCode = function getMeetingPresentByMeetingCodeAndProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " SELECT * "
            + " FROM tb_meeting_present"
            + " WHERE meeting_code = '" + data.meeting_code + "'"
            + " AND project_code = '" + data.project_code + "'"
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingPresentAndUserAndProject = function getMeetingPresentAndUserAndProject(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present "+
        "LEFT JOIN tb_project ON tb_meeting_present.project_code = tb_project.project_code "+
        "LEFT JOIN tb_user ON tb_meeting_present.user_code = tb_user.user_code "+
        "WHERE meeting_code = '" +data.meeting_code+ "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByNextWeekCode = function getMeetingByNextWeekCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present "+
        "WHERE meeting_present_code = '" +data.meeting_present_code+ "'";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByCompletedWorkCode = function getMeetingByCompletedWorkCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present "+
        "WHERE meeting_present_code = '" +data.meeting_present_code+ "'";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByNonCompletedWorkCode = function getMeetingByNonCompletedWorkCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present "+
        "WHERE meeting_present_code = '" +data.meeting_present_code+ "'";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingByAllReminingWorkCode = function getMeetingByAllReminingWorkCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_present "+
        "WHERE meeting_present_code = '" +data.meeting_present_code+ "'";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingCompletedWork = function getMeetingCompletedWork(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_completedwork_image " +
            "LEFT JOIN tb_meeting_present ON tb_meeting_completedwork_image.meeting_present_code = tb_meeting_present.meeting_present_code " +
            // "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code " +
            "WHERE tb_meeting_completedwork_image.meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingNonCompletedWork = function getMeetingNonCompletedWork(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_noncompletedwork_image " +
            "LEFT JOIN tb_meeting_present ON tb_meeting_noncompletedwork_image.meeting_present_code = tb_meeting_present.meeting_present_code " +
            // "LEFT JOIN tb_meeting_hiligth_image ON tb_meeting_hiligth.meeting_hiligth_code = tb_meeting_hiligth_image.meeting_hiligth_code " +
            "WHERE tb_meeting_noncompletedwork_image.meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingImageCompletedWorkCode = function getMeetingImageCompletedWorkCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_completedwork_image " +
            "WHERE meeting_completedwork_image_code = '" + data.meeting_completedwork_image_code + "' ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingImageHiligthCode = function getMeetingImageHiligthCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_hiligth_image " +
            "WHERE meeting_hiligth_image_code = '" + data.meeting_hiligth_image_code + "' ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingImageNonCompletedWorkCode = function getMeetingImageNonCompletedWorkCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_meeting_noncompletedwork_image " +
            "WHERE meeting_noncompletedwork_image_code = '" + data.meeting_noncompletedwork_image_code + "' ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingOldMeeting = function getMeetingOldMeeting(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " SELECT * FROM tb_meeting_present  " 
            // + "LEFT JOIN tb_project ON tb_meeting_present.project_code = tb_project.project_code "
            // + "WHERE tb_meeting_present.project_code = '" + data.project_code + "'"
            + "WHERE user_code = '" + data.user_code + "'"
            + "AND project_code = '" +data.project_code + "'"
            + "AND meeting_code < '"+ data.meeting_code +"'"
            + "ORDER BY meeting_code DESC LIMIT 0,1";
            // SELECT * FROM tb_meeting_present 
            // WHERE user_code ='US2020506001'
            //  AND project_code = 'PJ2020409003' 
            //  AND meeting_code < 'MT2020522001'
            //   ORDER BY meeting_code DESC LIMIT 0,1
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getMeetingPresentByScoreAndProject = function getMeetingPresentByScoreAndProject(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " SELECT tb_user.user_code,tb_user.user_name,tb_user.user_lastname , tb_project.project_name,"
        +"AVG(meeting_completedwork_score) AS meeting_completedwork_score ,"
        +"AVG(meeting_noncompletedwork_score) AS meeting_noncompletedwork_score ," 
        +"AVG(meeting_problems_score) meeting_problems_score ,"
        +"AVG(meeting_hiligth_score) AS meeting_hiligth_score " 
        +"FROM tb_meeting_present " 
        +"LEFT JOIN tb_user ON tb_meeting_present.user_code = tb_user.user_code "
        +"LEFT JOIN tb_project ON tb_meeting_present.project_code = tb_project.project_code "
        +"GROUP BY tb_meeting_present.project_code"
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}

Task.insertMeeting = async function insertMeeting(data) {
    const date = new Date()
    const code = 'MT' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCode({ code: code, digit: 3, })
    
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting ("
            + "meeting_code, "
            + "meeting_name, "
            + "meeting_details, "
            + "meeting_datetime, "
            + "addby,"
            + "adddate"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_name + "', "
            + " '" + data.meeting_details + "', "
            + " '" + data.meeting_datetime + "', "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + ") ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingPresent = async function insertMeetingPresent(data) {
    console.log('insertMeetingPresent',data)
    const date = new Date()
    const code = 'MTP' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodePresent({ code: code, digit: 3, })

    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_present ("
            + "meeting_present_code, "
            + "meeting_code, "
            + "project_code, "
            + "user_code, "
            + "meeting_nextweek_list, "
            + "meeting_completedwork_list, "
            + "meeting_noncompletedwork_list, "
            + "meeting_allremainingwork_list, "
            + "addby,"
            + "adddate"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_code + "', "
            + " '" + data.project_code + "', "
            + " '" + data.user_code + "', "
            + " '" + data.meeting_nextweek_list + "', "
            + " '" + data.meeting_nextweek_list + "', "
            + " '" + data.meeting_nextweek_list + "', "
            + " '" + data.meeting_allremainingwork_list + "', "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + ") ";
            console.log('insertMeetingPresent',str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingProblem = async function insertMeetingProblem(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTC' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeProblem({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_problems ("
            + "meeting_problems_code, "
            + "meeting_present_code, "
            + "meeting_problems_topic, "
            + "meeting_problems_detail, "
            + "addby,"
            + "adddate"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_present_code + "', "
            + " " + sql.escape(data.meeting_problems_topic) + ", "
            + " " + sql.escape(data.meeting_problems_detail) + ", "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + ") ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingProblemImage = async function insertMeetingProblemImage(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTI' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeProblemImage({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_problems_image ("
            + "meeting_problems_image_code, "
            + "meeting_problems_code, "
            + "meeting_problems_image_url, "
            + "meeting_problems_image_detail "
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_problems_code + "', "
            + " '" + data.meeting_problems_image_url + "', "
            + " " + sql.escape(data.meeting_problems_image_detail) + " "
            + ") ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingHiligth = async function insertMeetingHiligth(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTH' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeHiligth({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_hiligth ("
            + "meeting_hiligth_code, "
            + "meeting_present_code, "
            + "meeting_hiligth_topic, "
            + "meeting_hiligth_detail, "
            + "addby,"
            + "adddate"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_present_code + "', "
            + " '" + data.meeting_hiligth_topic + "', "
            + " '" + data.meeting_hiligth_detail + "', "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + ") ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingHiligthImage = async function insertMeetingHiligthImage(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTIH' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeHiligthImage({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_hiligth_image ("
            + "meeting_hiligth_image_code, "
            + "meeting_hiligth_code, "
            + "meeting_hiligth_image_url, "
            + "meeting_hiligth_image_detail "
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_hiligth_code + "', "
            + " '" + data.meeting_hiligth_image_url + "', "
            + " '" + data.meeting_hiligth_image_detail + "' "
            + ") ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingNextWeek = async function insertMeetingNextWeek(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTN' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeNextWeek({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_nextweek ("
            + "meeting_nextweek_code, "
            + "meeting_present_code, "
            + "meeting_nextweek_list ,"
            + "addby,"
            + "adddate"
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_present_code + "', "
            + " " + sql.escape(data.meeting_nextweek_list) + ", "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + ") ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingCompletedWorkImage = async function insertMeetingCompletedWorkImage(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTIC' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeCompletedWorkImage({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_completedwork_image ("
            + "meeting_completedwork_image_code, "
            + "meeting_present_code, "
            + "meeting_completedwork_image_url, "
            + "meeting_completedwork_image_detail "
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_present_code + "', "
            + " '" + data.meeting_completedwork_image_url + "', "
            + " '" + data.meeting_completedwork_image_detail + "' "
            + ") ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertMeetingNonCompletedWorkImage = async function insertMeetingNonCompletedWorkImage(data) {
    console.log(data)
    const date = new Date()
    const code = 'MTIC' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeNonCompletedWorkImage({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_meeting_noncompletedwork_image ("
            + "meeting_noncompletedwork_image_code, "
            + "meeting_present_code, "
            + "meeting_noncompletedwork_image_url, "
            + "meeting_noncompletedwork_image_detail "
            + ") VALUES ('" + last_code + "', "
            + " '" + data.meeting_present_code + "', "
            + " '" + data.meeting_noncompletedwork_image_url + "', "
            + " '" + data.meeting_noncompletedwork_image_detail + "' "
            + ") ";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    last_code: last_code,
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingByMeetingCode = function updateMeetingByMeetingCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting "
            + " SET meeting_name = '" + data.meeting_name + "',"
            + " meeting_details = '" + data.meeting_details + "',"
            + " meeting_datetime = '" + data.meeting_datetime + "',"
            + " updateby = '" + data.updateby + "',"
            + " lastupdate = " + " NOW()"
            + " WHERE meeting_code = '" + data.meeting_code + "'";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingHiligthImage = function updateMeetingHiligthImage(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_hiligth_image "
            + " SET meeting_hiligth_image_detail = '" + data.meeting_hiligth_image_detail + "'"
            + " WHERE meeting_hiligth_code = '" + data.meeting_hiligth_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingProblemsImage = function updateMeetingProblemsImage(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_problems_image "
            + " SET meeting_problems_image_detail = '" + data.meeting_problems_image_detail + "'"
            + " WHERE meeting_problems_code = '" + data.meeting_problems_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingByProblemsCode = function updateMeetingByProblemsCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_problems "
            + " SET meeting_problems_topic = '" + data.meeting_problems_topic + "',"
            + " meeting_problems_detail = '" + data.meeting_problems_detail + "',"
            + " updateby = '" + data.updateby + "',"
            + " lastupdate = " + " NOW()"
            + " WHERE meeting_problems_code = '" + data.meeting_problems_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingByHiligthCode = function updateMeetingByHiligthCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_hiligth "
            + " SET meeting_hiligth_topic = '" + data.meeting_hiligth_topic + "',"
            + " meeting_hiligth_detail = '" + data.meeting_hiligth_detail + "',"
            + " updateby = '" + data.updateby + "',"
            + " lastupdate = " + " NOW()"
            + " WHERE meeting_hiligth_code = '" + data.meeting_hiligth_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingByProblemImageCode = function updateMeetingByProblemImageCode(data) {
    console.log('data', data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_problems_image "
            + " SET meeting_problems_image_url = '" + data.meeting_problems_image_url + "',"
            + " meeting_problems_image_detail = '" + data.meeting_problems_image_detail + "',"
            + " WHERE meeting_problems_image_code = '" + data.meeting_problems_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingNextWeek = function updatetMeetingNextWeek(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_present "
            + " SET  meeting_nextweek_list = " + sql.escape(data.meeting_nextweek_list)+ ""
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingCompletedWork = function updateMeetingCompletedWork(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_present "
            + " SET  meeting_completedwork_list = " + sql.escape(data.meeting_completedwork_list)+ ""
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingNonCompletedWork = function updateMeetingNonCompletedWork(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_present "
            + " SET  meeting_noncompletedwork_list = " + sql.escape(data.meeting_noncompletedwork_list)+ ""
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingAllRemainingWork = function updateMeetingAllRemainingWork(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_present "
            + " SET  meeting_allremainingwork_list = " + sql.escape(data.meeting_allremainingwork_list)+ ""
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingScore = function updateMeetingScore(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_present "
            + " SET  meeting_completedwork_score = '" + data.meeting_completedwork_score + "',"
            + " meeting_noncompletedwork_score = '" + data.meeting_noncompletedwork_score + "',"
            + " meeting_problems_score = '" + data.meeting_problems_score + "',"
            + " meeting_hiligth_score = '" + data.meeting_hiligth_score + "'"
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByMeetingCode = function deleteMeetingByMeetingCode(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting WHERE meeting_code = '" + data.meeting_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingCompletedWorkImage = function updateMeetingCompletedWorkImage(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_completedwork_image "
            + " SET meeting_completedwork_image_detail = '" + data.meeting_completedwork_image_detail + "'"
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateMeetingNonCompletedWorkImage = function updateMeetingNonCompletedWorkImage(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_meeting_noncompletedwork_image "
            + " SET meeting_noncompletedwork_image_detail = '" + data.meeting_noncompletedwork_image_detail + "'"
            + " WHERE meeting_present_code = '" + data.meeting_present_code + "'";
            console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByProblems = function deleteMeetingByProblems(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_problems WHERE meeting_problems_code = '" + data.meeting_problems_code + "' ;"+
        " DELETE FROM tb_meeting_problems_image WHERE meeting_problems_code = '" + data.meeting_problems_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByHiligth = function deleteMeetingByHiligth(data) {
    console.log(data)
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_hiligth WHERE meeting_hiligth_code = '" + data.meeting_hiligth_code + "' ;"+
        " DELETE FROM tb_meeting_hiligth_image WHERE meeting_hiligth_code = '" + data.meeting_hiligth_code + "'";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByImage = function deleteMeetingByImage(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_problems_image WHERE meeting_problems_image_code = '" + data.meeting_problems_image_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByImageHiligth = function deleteMeetingByImageHiligth(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_hiligth_image WHERE meeting_hiligth_image_code = '" + data.meeting_hiligth_image_code + "' ";
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByImageCompletedWork = function deleteMeetingByImageCompletedWork(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_completedwork_image WHERE meeting_completedwork_image_code = '" + data.meeting_completedwork_image_code + "' ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.deleteMeetingByImageNonCompletedWork = function deleteMeetingByImageNonCompletedWork(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_meeting_noncompletedwork_image WHERE meeting_noncompletedwork_image_code = '" + data.meeting_noncompletedwork_image_code + "' ";
        console.log(str)
        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}

Task.getLastCode = function getLastCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting "
            + "WHERE meeting_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodePresent = function getLastCodePresent(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_present_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_present "
            + "WHERE meeting_present_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeProblem = function getLastCodeProblem(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_problems_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_problems "
            + "WHERE meeting_problems_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeProblemImage = function getLastCodeProblemImage(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_problems_image_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_problems_image "
            + "WHERE meeting_problems_image_code LIKE ('" + data.code + "%') "

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeHiligth = function getLastCodeHiligth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_hiligth_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_hiligth "
            + "WHERE meeting_hiligth_code LIKE ('" + data.code + "%') "

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeHiligthImage = function getLastCodeHiligthImage(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_hiligth_image_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_hiligth_image "
            + "WHERE meeting_hiligth_image_code LIKE ('" + data.code + "%') "

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeNextWeek = function getLastCodeNextWeek(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_nextweek_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_nextweek "
            + "WHERE meeting_nextweek_code LIKE ('" + data.code + "%') "

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeCompletedWorkImage = function getLastCodeCompletedWorkImage(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_completedwork_image_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_completedwork_image "
            + "WHERE meeting_completedwork_image_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeNonCompletedWorkImage = function getLastCodeNonCompletedWorkImage(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(meeting_noncompletedwork_image_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_meeting_noncompletedwork_image "
            + "WHERE meeting_noncompletedwork_image_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
module.exports = Task;