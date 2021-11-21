
//require returns a function and the set of paranthesis after will invoke the function immediatley after we require it into this file.
const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new')
//method to add dynamic routing first argument describes rout and second will be the component I tap into
.add('/campaigns/:address', '/campaigns/show')

//method to add a new route towards the list of requests page 
.add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;



