var RentalitemModel = require('../models/RentalitemModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getRentalitemBy = async function getRentalitemBy(data, result) {
    var RetrentalitemList = await RentalitemModel.getRentalitemBy(data);
    result(RetrentalitemList);
}
Task.getRentalitemByRentalitemCode = async function getRentalitemByRentalitemCode(data, result) {
    var Retrentalitem = await RentalitemModel.getRentalitemByRentalitemCode(data);
    result(Retrentalitem);
}
Task.getRentalitemByRentalitemCodeJoinProduct = async function getRentalitemByRentalitemCodeJoinProduct(data, result) {
    var Retrentalitem = await RentalitemModel.getRentalitemByRentalitemCodeJoinProduct(data);
    result(Retrentalitem);
}
Task.getRentalitemAndUserAndCustomere = async function getRentalitemAndUserAndCustomere(data, result) {
    var Retrentalitem = await RentalitemModel.getRentalitemAndUserAndCustomere(data);
    result(Retrentalitem);
}

Task.updateRentalitem = async function updateRentalitem(data, result) {
    var response = await RentalitemModel.updateRentalitem(data);
    result(response);
}
Task.deleteRentalitemByRentalitemCode = async function deleteRentalitemByRentalitemCode(data, result) {
    var response = await RentalitemModel.deleteRentalitemByRentalitemCode(data);
    result(response);
}

module.exports = Task;