var OverdueModel = require('../models/OverdueModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getOverdueBy = async function getOverdueBy(data, result) {
    var RetOverdueList = await OverdueModel.getOverdueBy(data);
    result(RetOverdueList);
}
Task.getOverdueByOverdueCode = async function getOverdueByOverdueCode(data, result) {
    var RetOverdue = await OverdueModel.getOverdueByOverdueCode(data);
    result(RetOverdue);
}
Task.getOverdueByOverdueCodeJoinProduct = async function getOverdueByOverdueCodeJoinProduct(data, result) {
    var RetOverdue = await OverdueModel.getOverdueByOverdueCodeJoinProduct(data);
    result(RetOverdue);
}
Task.getOverdueAndUserAndCustomere = async function getOverdueAndUserAndCustomere(data, result) {
    var RetOverdue = await OverdueModel.getOverdueAndUserAndCustomere(data);
    result(RetOverdue);
}

Task.updateOverdue = async function updateOverdue(data, result) {
    var response = await OverdueModel.updateOverdue(data);
    result(response);
}
Task.deleteRetOverdueByRetOverdueCode = async function deleteRetOverdueByRetOverdueCode(data, result) {
    var response = await OverdueModel.deleteRetOverdueByRetOverdueCode(data);
    result(response);
}

module.exports = Task;