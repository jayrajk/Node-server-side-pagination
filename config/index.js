const Joi = require('joi');
const dbconfig = require('./dbconfig');

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test'])
        .default('development'),
    PORT: Joi.number()
        .default(8002),
}).unknown()
    .required();

const config = {
    env: envVarsSchema.NODE_ENV,
    port: envVarsSchema.PORT,
};

module.exports = config;