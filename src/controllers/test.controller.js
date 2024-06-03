exports.test = (req,res) => {
    var code = 200;
    var message = '';
    var data = {};

    message = "Berhasil";
    
    return res.status(code).json({
        code,
        message,
        data,
    });
}