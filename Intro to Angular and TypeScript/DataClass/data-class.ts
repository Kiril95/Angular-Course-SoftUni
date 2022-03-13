class HttpRequest {
    constructor(
        private method: string,
        private uri: string,
        private version: string,
        private message: string,
        public response: string = undefined,
        public fulfilled: boolean = false
    ) { }
}

let myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);