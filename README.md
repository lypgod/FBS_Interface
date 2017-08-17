# FBS_Interface
#### Front/Back-end seperated developing framework - interface part

###### Editor: Swagger-Editor
- under swagger-editor path, run http-server -p 3000. then go http://127.0.0.1:3000/
- alt: https://editor.swagger.io/
- Test error response use 'Postman'

###### Mockup Server
- Swagger-Editor -> Generate Server -> nodejs-server
- Go to nodejs-server dir
	- edit index.js
		```javascript
		var serverPort = 8080;
		var allowCrossDomain = function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			if(req.method=="OPTIONS") res.end("");
			else next();
		}
		app.use(allowCrossDomain);
		```
	- Edit UserService.js to customize response
	- npm install
	- npm start
