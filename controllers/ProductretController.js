var ProductretModel = require('../models/ProductretModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getProductretBy = async function getProductretBy(data, result) {
    var RetProductretList = await ProductretModel.getProductretBy(data);
    result(RetProductretList);
}
Task.getProductretByProductretCode = async function getProductretByProductretCode(data, result) {
    var RetProductret = await ProductretModel.getProductretByProductretCode(data);
    result(RetProductret);
}
Task.getProductretByProductretCodeJoinProduct = async function getProductretByProductretCodeJoinProduct(data, result) {
    var RetProductret = await ProductretModel.getProductretByProductretCodeJoinProduct(data);
    result(RetProductret);
}
Task.getProductretAndUserAndCustomere = async function getProductretAndUserAndCustomere(data, result) {
    var RetProductret = await ProductretModel.getProductretAndUserAndCustomere(data);
    result(RetProductret);
}

Task.updateProductret = async function updateProductret(data, result) {
    var response = await ProductretModel.updateProductret(data);
    result(response);
}
Task.deleteRetProductretByRetProductretCode = async function deleteRetProductretByRetProductretCode(data, result) {
    var response = await ProductretModel.deleteRetProductretByRetProductretCode(data);
    result(response);
}

module.exports = Task;