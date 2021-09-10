const router = require('express').Router()

router.get('/',(_req,res)=>{
    res.send('files')
})


module.exports = router


