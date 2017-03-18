var appRouter = function(app) {
    app.get("/", function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        // res.send(JSON.stringify({ a: 1 }, null, 3)); // no complex
        res.send(1);
    });

    app.get("/schema", function(req, res) {

        var fs = require("fs");
        const path = require('path');

        var jsonPath = path.join(__dirname, '', 'schema.json')
        console.log(jsonPath);
        var content = fs.readFileSync(jsonPath);

        var jsonContent = JSON.parse(content);
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonContent, null, 3);

    })
}
 
module.exports = appRouter;