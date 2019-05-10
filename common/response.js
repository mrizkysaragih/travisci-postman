
module.exports = {

    general: (err,reponse) => {

        if (err != null){
            console.log(err)
            code = 5000
            reponse = "Internal Server Error"
        }
        else{
            code = 2000
        }
        return {
            "data":reponse,
            "code":code,
            "latency":"0.00 ms"
        }
    }
}
