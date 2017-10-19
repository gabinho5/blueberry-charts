var axios = require("axios");

// localhost
// const BASE_URL = "http://localhost:3000";

// Staging env
// const BASE_URL = "https://antioxidant.mybluemix.net";

// Prod env
const BASE_URL = "https://antioxidantprod.mybluemix.net";

const PROFILE_IMAGE_URL = "https://dal.objectstorage.open.softlayer.com/v1/AUTH_3097ce12725f4b01ac10dd2772361c85/antioxidant_profile_pictures/";
const PROJECT_IMAGE_URL = "https://dal.objectstorage.open.softlayer.com/v1/AUTH_3097ce12725f4b01ac10dd2772361c85/antioxidant_project_pictures/";

const DEFAULT_TIMEOUT = 10000;
const JOHNNY_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjaGVuamlhbkB1cy5pYm0uY29tIiwiZmlyc3RfbmFtZSI6IkppYW5iaWFvIiwibGFzdF9uYW1lIjoiQ2hlbiIsInByb2ZpbGVfcGljIjoiOWIyNGMxYzAtNTc1YS0xMWU3LWJlY2UtZDkxMWJkZmUzMzQzIiwiYWRtaW4iOnRydWUsImlhdCI6MTQ5ODQ4ODAyN30.jZgptZ9k8jVu1I86t7c2ImFkbdvVSCj4-QPry9TlVD0"

var userToken = null;

var convertParamsToStr = function (params) {
    if (!params || Object.keys(params).length == 0) {
        return "";
    }

    var queryStr = "?";

    Object.keys(params).forEach(function (key, index) {
        if (index > 0) {
            queryStr += "&";
        }

        queryStr += key + "=" + params[key];
    });

    return queryStr;
};

var getErrorMessage = function (err) {
    if (err && err.response && err.response.data && err.response.data.error) {
        return err.response.data.error;
    } else {
        return "An unexpected error occurred";
    }
};

var getResponseData = function (res) {
    if (res && res.data) {
        return res.data;
    } else {
        return res;
    }
};

module.exports = {
    user: null,
    token: null,
    cache: {},

    getBaseUrl: function () {
        return BASE_URL;
    },


    getToken() {
        return this.token;
    },

    createHeaders: function () {
        var headers = {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "x-user-token": JOHNNY_TOKEN
        };

        if (this.token) {
            headers["x-user-token"] = this.token;
        }

        return headers;
    },

    makeRequest: function (url, method, body, callback, excludeBaseUrl) {
        var urlToUse;

        if (excludeBaseUrl) {
            urlToUse = url;
        } else {
            urlToUse = BASE_URL + url;
        }

        axios({
            url: urlToUse,
            method: method,
            data: body,
            timeout: DEFAULT_TIMEOUT,
            headers: this.createHeaders()
        }).then(function (result) {
            return callback(null, getResponseData(result));
        }).catch(function (e) {
            return callback(getErrorMessage(e));
        });

    },

    post: function (url, body, callback, excludeBaseUrl) {
        this.makeRequest(url, "post", body, callback, excludeBaseUrl);
    },

    delete: function (url, body, callback, excludeBaseUrl) {
        this.makeRequest(url, "delete", body, callback, excludeBaseUrl);
    },

    get: function (url, callback, excludeBaseUrl) {
        this.makeRequest(url, "get", null, callback, excludeBaseUrl);
    },

    getAndCache: function (url, callback, excludeBaseUrl) {
        if (this.cache[url]) {
            return callback(null, this.cache[url]);
        }
        this.makeRequest(url, "get", null, function (err, res) {
            if (!err) {
                this.cache[url] = res;
            }
            callback(err, res);
        }.bind(this), excludeBaseUrl);
    },

    setToken: function (token) {
        this.token = token
    },

    clearToken: function () {
        this.token = null;
    },

    getLoggedInUser: function () {
        return this.user;
    },

    uploadFile: function (uploadUrl, fileUrl, fileType, callback) {
        let data = new FormData()
        if (fileUrl) {
            data.append(fileType, {
                uri: fileUrl,
                name: fileType,
                type: 'image/jpg'
            })
        }

        const config = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                "x-user-token": this.token
            },
            body: data
        }

        console.log("Uploading to ", BASE_URL + uploadUrl);

        fetch(BASE_URL + uploadUrl, config).then(function (res) {
            return res.json();
        }).then(function (data) {
            //console.warn(data.media);
            //return back the res data
            return callback(null, data);
        }).catch(function (err) {
            //console.warn(err);
            return callback(err);
        });

    }

};
