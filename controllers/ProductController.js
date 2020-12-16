var ProductModel = require('../models/ProductModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getProductBy = async function getProductBy(data, result) {
    var productList = await ProductModel.getProductBy(data);
    result(productList);
}
Task.getNewsShowBy = async function getNewsShowBy(data, result) {
    var newsList = await NewsModel.getNewsShowBy(data);
    result(newsList);
}
Task.getProductByProductCode = async function getProductByProductCode(data, result) {
    var product = await ProductModel.getProductByProductCode(data);
    result(product);
}

Task.updateProductByProductCode = async function updateProductByProductCode(data, result) {
    var response = await ProductModel.updateProductByProductCode(data);
    result(response);
}

Task.updateProductNumberByproductCodeAndUptate = async function updateProductNumberByproductCodeAndUptate(data, result) {
    var response = await ProductModel.updateProductNumberByproductCodeAndUptate(data);
    result(response);
}
Task.updateProductNumberByproductCode = async function updateProductNumberByproductCode(data, result) {
    var response = await ProductModel.updateProductNumberByproductCode(data);
    result(response);
}
Task.deleteProductByProductCode = async function deleteProductByProductCode(data, result) {
    var response = await ProductModel.deleteProductByProductCode(data);
    result(response);
}

module.exports = Task;