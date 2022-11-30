require('dotenv').config()
const secert =  require('crypto').randomBytes(256).toString('hex')

module.exports =  {
    port: process.env.PORT || 3000,
    isProduction: process.env.NODE_ENV === 'production',
    apiVersion: process.env.API_VERSION || 1,
    token_exp_days: process.env.TOKEN_EXP_DAYS || 1,
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : secert,
    mongodbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mydb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0',
    pageLimit: process.env.PAGE_LIMIT || 15
}

