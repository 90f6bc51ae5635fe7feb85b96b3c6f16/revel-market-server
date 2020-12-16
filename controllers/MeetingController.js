var MeetingModel = require('../models/MeetingModel');

var Task = function (task) {
    this.task = task.task;
};

// Task.getLogin = async function getLogin(data, result) {
//     var Meeting = await MeetingModel.getLogin(data);
//     result(Meeting);
// }
Task.getMeetingBy = async function getMeetingBy(data, result) {
    var MeetingList = await MeetingModel.getMeetingBy(data);
    result(MeetingList);
}
Task.getMeetingProblemsBy = async function getMeetingProblemsBy(data, result) {
    var MeetingList = await MeetingModel.getMeetingProblemsBy(data);
    result(MeetingList);
}
Task.getMeetingHiligthBy = async function getMeetingHiligthBy(data, result) {
    var MeetingList = await MeetingModel.getMeetingHiligthBy(data);
    result(MeetingList);
}
Task.getMeetingProblemsByCode = async function getMeetingProblemsByCode(data, result) {
    var MeetingList = await MeetingModel.getMeetingProblemsByCode(data);
    result(MeetingList);
}
Task.getMeetingHiligthByCode = async function getMeetingHiligthByCode(data, result) {
    var MeetingList = await MeetingModel.getMeetingHiligthByCode(data);
    result(MeetingList);
}
Task.getCountMeeting = async function getCountMeeting(data, result) {
    var MeetingList = await MeetingModel.getCountMeeting(data);
    result(MeetingList);
}
Task.getMeetingByMeetingCode = async function getMeetingByMeetingCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByMeetingCode(data);
    result(Meeting);
}
Task.getMeetingByProblemsCode = async function getMeetingByProblemsCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByProblemsCode(data);
    result(Meeting);
}
Task.getMeetingImageCompletedWorkCode = async function getMeetingImageCompletedWorkCode(data, result) {
    var Meeting = await MeetingModel.getMeetingImageCompletedWorkCode(data);
    result(Meeting);
}
Task.getMeetingImageHiligthCode = async function getMeetingImageHiligthCode(data, result) {
    var Meeting = await MeetingModel.getMeetingImageHiligthCode(data);
    result(Meeting);
}
Task.getMeetingImageNonCompletedWorkCode = async function getMeetingImageNonCompletedWorkCode(data, result) {
    var Meeting = await MeetingModel.getMeetingImageNonCompletedWorkCode(data);
    result(Meeting);
}
Task.getMeetingByHiligthCode = async function getMeetingByHiligthCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByHiligthCode(data);
    result(Meeting);
}
Task.getMeetingByCheck = async function getMeetingByCheck(data, result) {
    var Meeting = await MeetingModel.getMeetingByCheck(data);
    result(Meeting);
}
Task.getMeetingByCheckNotMeeting = async function getMeetingByCheckNotMeeting(data, result) {
    var Meeting = await MeetingModel.getMeetingByCheckNotMeeting(data);
    result(Meeting);
}
Task.getMeetingPresentByMeetingCode = async function getMeetingPresentByMeetingCode(data, result) {
    var Meeting = await MeetingModel.getMeetingPresentByMeetingCode(data);
    result(Meeting);
}
Task.getMeetingProblems = async function getMeetingProblems(data, result) {
    var Meeting = await MeetingModel.getMeetingProblems(data);
    result(Meeting);
}
Task.getMeetingHiligth = async function getMeetingHiligth(data, result) {
    var Meeting = await MeetingModel.getMeetingHiligth(data);
    result(Meeting);
}
Task.getMeetingAll = async function getMeetingAll(data, result) {
    var Meeting = await MeetingModel.getMeetingAll(data);
    result(Meeting);
}
Task.getMeetingPresentByMeetingCodeAndProjectCode = async function getMeetingPresentByMeetingCodeAndProjectCode(data, result) {
    var Meeting = await MeetingModel.getMeetingPresentByMeetingCodeAndProjectCode(data);
    result(Meeting);
}
Task.getMeetingPresentAndUserAndProject = async function getMeetingPresentAndUserAndProject(data, result) {
    var Meeting = await MeetingModel.getMeetingPresentAndUserAndProject(data);
    result(Meeting);
}
Task.getMeetingByNextWeekCode = async function getMeetingByNextWeekCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByNextWeekCode(data);
    result(Meeting);
}
Task.getMeetingByCompletedWorkCode = async function getMeetingByCompletedWorkCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByCompletedWorkCode(data);
    result(Meeting);
}
Task.getMeetingByNonCompletedWorkCode = async function getMeetingByNonCompletedWorkCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByNonCompletedWorkCode(data);
    result(Meeting);
}
Task.getMeetingByAllReminingWorkCode = async function getMeetingByAllReminingWorkCode(data, result) {
    var Meeting = await MeetingModel.getMeetingByAllReminingWorkCode(data);
    result(Meeting);
}
Task.getMeetingCompletedWork = async function getMeetingCompletedWork(data, result) {
    var Meeting = await MeetingModel.getMeetingCompletedWork(data);
    result(Meeting);
}
Task.getMeetingNonCompletedWork = async function getMeetingNonCompletedWork(data, result) {
    var Meeting = await MeetingModel.getMeetingNonCompletedWork(data);
    result(Meeting);
}
Task.getMeetingOldMeeting = async function getMeetingOldMeeting(data, result) {
    var Meeting = await MeetingModel.getMeetingOldMeeting(data);
    result(Meeting);
}
Task.getMeetingPresentByScoreAndProject = async function getMeetingPresentByScoreAndProject(data, result) {
    var Meeting = await MeetingModel.getMeetingPresentByScoreAndProject(data);
    result(Meeting);
}
Task.updateMeetingByMeetingCode = async function updateMeetingByMeetingCode(data, result) {
    var response = await MeetingModel.updateMeetingByMeetingCode(data);
    result(response);
}
Task.updateMeetingByProblemsCode = async function updateMeetingByProblemsCode(data, result) {
    var response = await MeetingModel.updateMeetingByProblemsCode(data);
    result(response);
}
Task.updateMeetingByHiligthCode = async function updateMeetingByHiligthCode(data, result) {
    var response = await MeetingModel.updateMeetingByHiligthCode(data);
    result(response);
}
Task.updateMeetingByProblemImageCode = async function updateMeetingByProblemImageCode(data, result) {
    var response = await MeetingModel.updateMeetingByProblemImageCode(data);
    result(response);
}
Task.updateMeetingHiligthImage = async function updateMeetingHiligthImage(data, result) {
    var response = await MeetingModel.updateMeetingHiligthImage(data);
    result(response);
}
Task.updateMeetingProblemsImage = async function updateMeetingProblemsImage(data, result) {
    var response = await MeetingModel.updateMeetingProblemsImage(data);
    result(response);
}
Task.updateImageNameByMeetingCode = async function updateImageNameByMeetingCode(data, result) {
    var response = await MeetingModel.updateImageNameByMeetingCode(data);
    result(response);
}

Task.updateMeetingNextWeek = async function updateMeetingNextWeek(data, result) {
    var response = await MeetingModel.updateMeetingNextWeek(data);
    result(response);
}

Task.updateMeetingCompletedWork = async function updateMeetingCompletedWork(data, result) {
    var response = await MeetingModel.updateMeetingCompletedWork(data);
    result(response);
}

Task.updateMeetingNonCompletedWork = async function updateMeetingNonCompletedWork(data, result) {
    var response = await MeetingModel.updateMeetingNonCompletedWork(data);
    result(response);
}

Task.updateMeetingAllRemainingWork = async function updateMeetingAllRemainingWork(data, result) {
    var response = await MeetingModel.updateMeetingAllRemainingWork(data);
    result(response);
}

Task.updateMeetingCompletedWorkImage = async function updateMeetingCompletedWorkImage(data, result) {
    var response = await MeetingModel.updateMeetingCompletedWorkImage(data);
    result(response);
}

Task.updateMeetingNonCompletedWorkImage = async function updateMeetingNonCompletedWorkImage(data, result) {
    var response = await MeetingModel.updateMeetingNonCompletedWorkImage(data);
    result(response);
}
Task.updateMeetingScore = async function updateMeetingScore(data, result) {
    var response = await MeetingModel.updateMeetingScore(data);
    result(response);
}

Task.deleteMeetingByMeetingCode = async function deleteMeetingByMeetingCode(data, result) {
    var response = await MeetingModel.deleteMeetingByMeetingCode(data);
    result(response);
}

Task.deleteMeetingByProblems = async function deleteMeetingByProblems(data, result) {
    var response = await MeetingModel.deleteMeetingByProblems(data);
    result(response);
}

Task.deleteMeetingByHiligth = async function deleteMeetingByHiligth(data, result) {
    var response = await MeetingModel.deleteMeetingByHiligth(data);
    result(response);
}

Task.deleteMeetingByImage = async function deleteMeetingByImage(data, result) {
    var response = await MeetingModel.deleteMeetingByImage(data);
    result(response);
}
Task.deleteMeetingByImageHiligth = async function deleteMeetingByImageHiligth(data, result) {
    var response = await MeetingModel.deleteMeetingByImageHiligth(data);
    result(response);
}
Task.deleteMeetingByImageCompletedWork = async function deleteMeetingByImageCompletedWork(data, result) {
    var response = await MeetingModel.deleteMeetingByImageCompletedWork(data);
    result(response);
}
Task.deleteMeetingByCompletedWork = async function deleteMeetingByCompletedWork(data, result) {
    var response = await MeetingModel.deleteMeetingByCompletedWork(data);
    result(response);
}
Task.deleteMeetingByImageNonCompletedWork = async function deleteMeetingByImageNonCompletedWork(data, result) {
    var response = await MeetingModel.deleteMeetingByImageNonCompletedWork(data);
    result(response);
}
Task.deleteMeetingByNonCompletedWork = async function deleteMeetingByNonCompletedWork(data, result) {
    var response = await MeetingModel.deleteMeetingByNonCompletedWork(data);
    result(response);
}
module.exports = Task;