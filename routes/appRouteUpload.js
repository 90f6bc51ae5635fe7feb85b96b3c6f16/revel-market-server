const Config = require('../globals/Config');
const path = require('path');
const mkdirp = require('mkdirp')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const _config = new Config();

module.exports = function (app) {

    //#############################################################################################################
    //#############################################################################################################
    //################################################ Upload Route ###############################################
    //#############################################################################################################
    //#############################################################################################################


    app.post('/upload-file', function (req, res) {
        console.log(">>>>", req.body);
        var multer = require('multer');
        var filePathSub = '';
        var Storage = multer.diskStorage({
            destination: function (req, file, callback) {
                console.log(">>>>>>", req.params);
                const userPath = _config.getInt2Text(req.body._code) + "/" + req.body.upload_url;
                const subPath = '../../public_file/' + userPath;
                const filePath = path.join(__dirname, subPath);
                filePathSub = 'public_file/' + userPath;

                mkdirp.sync(filePath)
                callback(null, filePath);
            },
            filename: function (req, file, callback) {
                console.log("file : ", req.body);
                callback(null, uuidv4() + req.body.file_type);
            }
        });

        var upload = multer({
            storage: Storage
        }).single("files");
        upload(req, res, function (err) {
            if (!req.file) {
                const require = {
                    data: { comment_photo_url: '' },
                    error: [{ message: 'Can not find photo upload.' }],
                    upload_result: false,
                    server_result: true
                };
                res.send(require);
            } else {
                const comment_photo_url = _config.getServerUrl() + "/" + filePathSub + "/" + req.file.filename
                const require = {
                    data: [{ comment_photo_url: comment_photo_url }],
                    error: [{ message: 'Upload photo complete.' }],
                    upload_result: true,
                    server_result: true
                };
                console.log('res', require);
                res.send(require);
            }
        });
    });

    app.post('/delete-file', function (req, res) {
        console.log(req.body);

        const filePath = path.join(__dirname, "../../" + req.body.delete_path);
        console.log(">", filePath);

        fs.unlink(filePath, (err) => {
            if (err) {
                const require = {
                    data: { comment_photo_url: '' },
                    error: [{ message: 'Can not find photo delete.' }],
                    upload_result: false,
                    server_result: true
                };
                res.send(require);
            } else {
                const require = {
                    data: [],
                    error: [{ message: 'Delete photo complete.' }],
                    upload_result: true,
                    server_result: true
                };
                console.log('res', require);
                res.send(require);
            }
            console.log('path/file.txt was deleted');
        });



    });





}