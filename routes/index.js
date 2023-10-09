const productRouter = require("./product");
const brandRouter = require("./brand");
const userRouter = require("./user");


function route(app) {
  app.use("/api/product", productRouter);
  app.use("/api/brand", brandRouter);
  app.use("/api/user", userRouter)
}
module.exports = route;
  