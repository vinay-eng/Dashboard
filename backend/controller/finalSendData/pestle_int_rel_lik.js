
const data = require('../../_data/jsondata.json')

exports.getAll_pestle_int_rel_lik  = async (req,res)=>{
    let i;
    let pestle_to_send = []
    let pestle_intensity = []
    let pestle_likelihood = []
    let pestle_relevance = []
    for(i in data){
        var current_data = data[i].pestle;
        if(pestle_to_send.includes(current_data)){
        var ido = pestle_to_send.indexOf(data[i].pestle)
            if(pestle_intensity[ido] < data[i].intensity){
                pestle_intensity[ido] = data[i].intensity
            }
        }else{
    pestle_to_send.push(data[i].pestle)
    pestle_intensity.push(data[i].intensity)
    pestle_likelihood.push(data[i].likelihood)
    pestle_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess:true,
        data : {
            data1: pestle_to_send,
            data2: pestle_intensity,
            data3: pestle_likelihood,
            data4: pestle_relevance
        }
    }
    res.status(200).json(send_data)
}

exports.getSingle_pestle_int_lik_rel = async (req,res)=>{
    let pestle_name = req.params.id
    let pestle_intensity = []
    let pestle_likelihood = []
    let pestle_relevance = []
    for(var i in data){
        if(data[i].pestle===pestle_name){
            pestle_intensity.push(data[i].intensity)
            pestle_likelihood.push(data[i].likelihood)
            pestle_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: [pestle_name],
            data2: pestle_intensity,
            data3: pestle_likelihood,
            data4: pestle_relevance
        }
    }
    res.status(200).json(send_data)
}
