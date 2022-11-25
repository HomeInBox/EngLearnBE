const express = require('express')
const app = express()
const config = require('./Config/config')


require('./Config/AppSetting')(app);

app.use(require('./Router/RouterRegister.router'))


  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  });


