var appRouter = function(app) {
    app.get("/", function(req, res) {

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ a: 1 }, null, 3));
    });

}
 
module.exports = appRouter;