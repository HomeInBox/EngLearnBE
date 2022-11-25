

const method = {
    async OnGetScoreTest(req,res){
        try {
            const Score  = "OnGetScore";
            res.success(Score,200)
        }catch(error){
            res.error("",error,"OnGetScoreTest");
        }
    },
    
    async OngetScore(req,res){
        try {
            const requset = req.body
            res.success(requset,200)
        } catch (error) {
            res.error("",error,"OnGetScoreTest");
        }
    }
}

module.exports = {...method}