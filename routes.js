
//require returns a function and the set of paranthesis after will invoke the function immediatley after we require it into this file.
const routes = require('next-routes')();


//method to add dynamic routing first argument describes rout and second will be the component I tap into
routes.add('/campaigns/:address', '/campaigns/show');

module.exports = routes;



