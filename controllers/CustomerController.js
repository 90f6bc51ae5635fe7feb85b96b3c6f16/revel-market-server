var CustomerModel = require('../models/CustomerModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getLogin = async function getLogin(data, result) {
    var Customer = await CustomerModel.getLogin(data);
    result(Customer);
}
Task.getCustomerBy = async function getCustomerBy(data, result) {
    var CustomerList = await CustomerModel.getCustomerBy(data);
    //console.log(CustomerList)
    result(CustomerList);
}
Task.getCountCustomer = async function getCountCustomer(data, result) {
    var CustomerList = await CustomerModel.getCountCustomer(data);
    //console.log(CustomerList)
    result(CustomerList);
}
Task.getCustomerByCustomerCode = async function getCustomerByCustomerCode(data, result) {
    var Customer = await CustomerModel.getCustomerByCustomerCode(data);
    result(Customer);
}
Task.updateCustomerByCustomerCode = async function updateCustomerByCustomerCode(data, result) {
    var response = await CustomerModel.updateCustomerByCustomerCode(data);
    result(response);
}
Task.updateImageNameByCustomerCode = async function updateImageNameByCustomerCode(data, result) {
    var response = await CustomerModel.updateImageNameByCustomerCode(data);
    result(response);
}

Task.deleteCustomerByCustomerCode = async function deleteCustomerByCustomerCode(data, result) {
    var response = await CustomerModel.deleteCustomerByCustomerCode(data);
    result(response);
}

module.exports = Task;