var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};
Task.getProjectBy = function getProjectBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_project " +
        "LEFT JOIN tb_customer ON tb_project.customer_code = tb_customer.customer_code " ;
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
Task.getCountProject = function getCountProject() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT COUNT(project_code) AS count_project  FROM tb_project ";
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
Task.getProjectByProjectCode = function getProjectByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * " +
        "FROM tb_project " +
        "LEFT JOIN tb_customer ON tb_project.customer_code = tb_customer.customer_code " +
        "WHERE project_code = '" + data.project_code + "' ";
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
Task.getProjectUserByProjectCode = function getProjectUserByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * " +
            "FROM tb_project_user " +
            "LEFT JOIN tb_user ON tb_project_user.user_code = tb_user.user_code " +
            "WHERE project_code = '" + data.project_code + "' ";

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
Task.getProjectUserByProjectByCode = function getProjectUserByProjectByCode(data) {
    return new Promise(function (resolve, reject) {
        var str =  " SELECT * FROM tb_project_user" +
            " LEFT JOIN tb_project ON tb_project_user.project_code = tb_project.project_code" +
            " WHERE tb_project_user.user_code = '" +data.user_code+ "' ";
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
Task.getProjectUserByProjectByCodeUser = function getProjectUserByProjectByCodeUser(data) {
    return new Promise(function (resolve, reject) {
        var str =  " SELECT * FROM tb_project_user" +
            " LEFT JOIN tb_project ON tb_project_user.project_code = tb_project.project_code" +
            " WHERE tb_project_user.user_code IN ('" + data.join("','") + "' )";
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
Task.getProjectFileByProjectCode = function getProjectFileByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * " +
            "FROM tb_project_file " +
            "LEFT JOIN tb_project ON tb_project_file.project_code = tb_project.project_code " +
            "WHERE tb_project.project_code = '" + data.project_code + "' ";
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
Task.getProjectScopeByProjectCode = function getProjectScopeByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * " +
            "FROM tb_project_scope " +
            "LEFT JOIN tb_project ON tb_project_scope.project_code = tb_project.project_code " +
            "WHERE tb_project.project_code = '" + data.project_code + "' ";
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
Task.insertProject = async function insertProject(data) {
    const date = new Date()
    const code = 'PJ' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCode({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_project ( "
            + "project_code, "
            + "customer_code, "
            + "project_name, "
            + "project_details, "
            + "project_duration, "
            + "addby, "
            + "adddate "
            + ") VALUES ('"
            + last_code + "', "
            + " '" + data.customer_code + "', "
            + " '" + data.project_name + "', "
            + " '" + data.project_details + "', "
            + " '" + data.project_duration + "', "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + "); "
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
Task.insertFile = async function insertFile(data) {
    const date = new Date()
    const code = 'FE' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeFile({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_project_file ( "
            + "project_file_code, "
            + "project_code, "
            + "project_file_url, "
            + "project_file_details, "
            + "project_file_name, "
            + "project_file_datetime, "
            + "addby, "
            + "adddate "
            + ") VALUES ('"
            + last_code + "', "
            + " '" + data.project_code + "', "
            + " '" + data.project_file_url + "', "
            + " '" + data.project_file_details + "', "
            + " '" + data.project_file_name + "', "
            + " NOW()" + ","
            + " '" + data.addby + "' ,"
            + " NOW()"
            + "); "
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
Task.insertProjectUser = async function insertProjectUser(data) {
    return new Promise(function (resolve, reject) {
        var str = ""
        for (let i = 0; i < data.user_code.length; i++) {
            // วน insert `tb__project_user
            str += "INSERT INTO tb_project_user ("

                + " user_code, "
                + " project_code, "
                + " addby,"
                + " adddate"
                + ") VALUES ("
                + " '" + data.user_code[i].value + "' ,"
                + " '" + data.project_code + "' ,"
                + " '" + data.addby + "' ,"
                + " NOW()"
                + "); "
        }
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
Task.getProjectFileByProjectCode = function getProjectFileByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * " +
            "FROM tb_project_file " +
            "LEFT JOIN tb_project ON tb_project_file.project_code = tb_project.project_code " +
            "WHERE tb_project.project_code = '" + data.project_code + "' ";
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
Task.insertProjectScope = async function insertProjectScope(data) {
    const date = new Date()
    const code = 'PJS' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeScope({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_project_scope ( "
            + "project_scope_code, "
            + "project_code, "
            + "project_scope_title, "
            + "project_scope_detail, "
            + "project_scope_date, "
            + "addby, "
            + "adddate "
            + ") VALUES ('"
            + last_code + "', "
            + " '" + data.project_code + "', "
            + " '" + data.project_scope_title + "', "
            + " '" + data.project_scope_detail + "', "
            + " '" + data.project_scope_date + "', "
            + " '" + data.addby + "' ,"
            + " NOW()"
            + "); "
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
Task.insertRemoveScope = async function insertRemoveScope(data) {
    console.log(data)
    const date = new Date()
    const code = 'RS' + date.getFullYear() + (date.getMonth() + 1) + date.getDate().toString().padStart(2, '0')
    const last_code = await this.getLastCodeRemoveScope({ code: code, digit: 3, })
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_sortree ( "
            + "sortree_code, "
            + "sortree_scope "
            + ") VALUES ('"
            + last_code + "',"
            + sql.escape(data.sortree_scope) + ""
            + "); "
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

Task.updateProjectByProjectCode = function updateProjectByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_project SET "
            + " customer_code = '" + data.customer_code + "',"
            + " project_name = '" + data.project_name + "',"
            + " project_details = '" + data.project_details + "',"
            + " project_duration = '" + data.project_duration + "'"
            + " WHERE project_code = '" + data.project_code + "'";
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
Task.updateImageNameByProjectCode = function updateImageNameByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_project "
            + " SET  project_image = '" + data.project_image + "'"
            + " WHERE project_code = '" + data.project_code + "'";

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
Task.updateFileNameByProjectCode = function updateFileNameByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_project_file "
            + " SET  project_file_url = '" + data.project_file_url + "'"
            + " WHERE project_file_code = '" + data.project_file_code + "'";
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

Task.updateProjectScopeByProjectCode = function updateProjectScopeByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_project "
            + " SET  project_scope = " + sql.escape(data.project_scope)+ ""
            + " WHERE project_code = '" + data.project_code + "'";
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

Task.deleteProjectByProjectCode = function deleteProjectByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_project WHERE project_code = '" + data.project_code + "' ";

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
Task.deleteProjectUserByProjectCode = function deleteProjectUserByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_project_user WHERE user_code = '" + data.user_code + "' ";
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
Task.deleteProjectFileByProjectCode = function deleteProjectFileByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_project_file WHERE project_file_code = '" + data.project_file_code + "' ";
        console.log("s", str)
        console.log(data)
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
Task.deleteProjectScopeByProjectCode = function deleteProjectScopeByProjectCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_project_scope WHERE project_scope_code = '" + data.project_scope_code + "' ";
        console.log("s", str)
        console.log(data)
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
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(project_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_project "
            + "WHERE project_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeFile = function getLastCodeFile(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(project_file_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_project_file "
            + "WHERE project_file_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeRemoveScope = function getLastCodeRemoveScope(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(sortree_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_sortree "
            + "WHERE sortree_code LIKE ('" + data.code + "%') "
        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}
Task.getLastCodeScope = function getLastCodeScope(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT('" + data.code + "',LPAD(IFNULL(MAX(CAST(SUBSTRING(project_scope_code," + (data.code.length + 1) + "," + data.digit + ") AS SIGNED)),0) + 1," + data.digit + ",0)) AS last_code "
            + "FROM tb_project_scope "
            + "WHERE project_scope_code LIKE ('" + data.code + "%') "
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