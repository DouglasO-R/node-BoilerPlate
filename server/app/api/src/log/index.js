import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => `${timestamp} : [${label}] : ${level} : ${message}`);

const log = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "api/src/log/log-api" })
  ],
  format: combine(
    label({ label: "log-api" }),
    timestamp(),
    myFormat
  )
});

export default log;
