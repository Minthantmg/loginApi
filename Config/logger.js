const { createLogger, transports, format } = require("winston");
const MongoDB = require("winston-mongodb").MongoDB;
const dotenv = require("dotenv");
dotenv.config();

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(format.timestamp(), format.simple()),
    }),
    // new transports.File({
    //     filename: 'Log/info.log',
    //     maxFiles: 5242880,
    //     colorize: false,
    //     level: 'info',
    //     format: format.combine(format.timestamp(), format.simple())
    // }),
    new transports.Console({
      level: "debug",
      format: format.combine(format.timestamp(), format.simple()),
    }),
    // new transports.File({
    //     filename: 'Log/info.log',
    //     maxFiles: 5242880, //5MB
    //     colorize: false,
    //     level: 'debug',
    //     format: format.combine(format.timestamp(), format.simple())
    // }),
    // new MongoDB({
    //     level: 'error',
    //     db: process.env.MONGODB_URI,
    //     options: { useUnifiedTopology: true },
    //     collection: "logger",
    //     format: format.combine(format.timestamp(), format.json())
    // })
  ],
});

module.exports = logger;
