const { Router } = require("express");

const routes = Router();

routes.post("/developers", (request, response) => {
  console.log(request.body);
  return response.json({ message: "veja o console" });
});

module.exports = routes;
