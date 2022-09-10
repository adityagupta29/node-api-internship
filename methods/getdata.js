const request = require('request');

module.exports = (url) => {
    return new Promise(function (resolve, reject) {
        request({
            method: 'GET',
            url: url
        }, (err, response) => {
            if (err) {
                reject(err);
            } else {
                const data = response.body;
                const output = JSON.parse(data)
                resolve(output);
            }
        });
    });
}