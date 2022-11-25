

const method = {
    async OnGetScoreTest(req,res){
        try {
            const Score  = "OnGetScore";
            res.success(Score,200)
        }catch(error){
            res.error("OnGetScore",error,"OnGetScore");
        }
    },
    
    async OngetScore(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = {...method}