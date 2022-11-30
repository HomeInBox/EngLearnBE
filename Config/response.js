
module.exports = (req, res, next) =>{

    res.success = (data = '',message, statusCode = 200) => {
        let successBody = {data:data,message:message}
         res.status(statusCode || 200).send(successBody)
    }

    res.error = (data = '',message,status = 500 ) => {
        let errorBody = {data: data,status: status, message: message}
        // if (code) errorBody.code = code
        res.status(status || 500).send({ error: errorBody })
    }

    next()
}