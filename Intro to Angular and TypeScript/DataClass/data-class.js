var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, uri, version, message, response, fulfilled) {
        if (response === void 0) { response = undefined; }
        if (fulfilled === void 0) { fulfilled = false; }
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
    return HttpRequest;
}());
var myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
