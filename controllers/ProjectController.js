var ProjectModel = require('../models/ProjectModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getProjectBy = async function getProjectBy(data, result) {
    var projectList = await ProjectModel.getProjectBy(data);
    result(projectList);
}
Task.getCountProject = async function getCountProject(data, result) {
    var projectList = await ProjectModel.getCountProject(data);
    result(projectList);
}
Task.getProjectByProjectCode = async function getProjectByProjectCode(data, result) {
    var project = await ProjectModel.getProjectByProjectCode(data)
    result(null,project);
}
Task.getProjectUserByProjectCode = async function getProjectUserByProjectCode(data, result) {
    var project = await ProjectModel.getProjectUserByProjectCode(data);
    result(project);
}
Task.getProjectUserByProjectByCodeUser = async function getProjectUserByProjectByCodeUser(data, result) {
    var project = await ProjectModel.getProjectUserByProjectByCodeUser(data);
    result(project);
}
Task.getProjectUserByProjectByCode = async function getProjectUserByProjectByCode(data, result) {
    var project = await ProjectModel.getProjectUserByProjectByCode(data);
    result(project);
}
Task.getProjectFileByProjectCode = async function getProjectFileByProjectCode(data, result) {
    var project = await ProjectModel.getProjectFileByProjectCode(data);
    result(project);
}
Task.getProjectScopeByProjectCode = async function getProjectScopeByProjectCode(data, result) {
    var project = await ProjectModel.getProjectScopeByProjectCode(data);
    result(project);
}
Task.updateProjectByProjectCode = async function updateProjectByProjectCode(data, result) {
    var response = await ProjectModel.updateProjectByProjectCode(data);
    result(response);
}
Task.updateProjectScopeByProjectCode = async function updateProjectScopeByProjectCode(data, result) {
    var response = await ProjectModel.updateProjectScopeByProjectCode(data);
    result(response);
}
Task.updateImageNameByProjectCode = async function updateImageNameByProjectCode(data, result) {
    var response = await ProjectModel.updateImageNameByProjectCode(data);
    result(response);
}

Task.deleteProjectByProjectCode = async function deleteProjectByProjectCode(data, result) {
    var response = await ProjectModel.deleteProjectByProjectCode(data);
    result(response);
}
Task.deleteProjectUserByProjectCode = async function deleteProjectUserByProjectCode(data, result) {
    var response = await ProjectModel.deleteProjectUserByProjectCode(data);
    result(response);
}
Task.deleteProjectFileByProjectCode = async function deleteProjectFileByProjectCode(data, result) {
    var response = await ProjectModel.deleteProjectFileByProjectCode(data);
    result(response);
}
Task.deleteProjectScopeByProjectCode = async function deleteProjectScopeByProjectCode(data, result) {
    var response = await ProjectModel.deleteProjectScopeByProjectCode(data);
    result(response);
}

module.exports = Task;