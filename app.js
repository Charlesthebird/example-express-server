var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();
var allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:4000",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      // if (!origin) return callback(null, true);
      // if (allowedOrigins.indexOf(origin) === -1) {
      //   console.log("Not allowed");
      //   var msg =
      //     "The CORS policy for this site does not " +
      //     "allow access from the specified Origin.";
      //   return callback(new Error(msg), false);
      // }
      console.log("Allowed");
      return callback(null, true);
    },
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
