
module.exports = (req, res, next) =>{

    res.success = (data = '', statusCode = 200) => {
         res.status(statusCode || 200).send(data)
    }

    res.error = (data = '',message, code,status = 500 ) => {
        let errorBody = {data: data,status: status, message: message ,code: code}
        if (code) errorBody.code = code
        res.status(status || 500).send({ error: errorBody })
    }

    next()
}