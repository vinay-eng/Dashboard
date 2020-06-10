
const data = require('../../_data/jsondata.json')

exports.getAll_region_int_rel_lik  = async (req,res)=>{
    let i;
    let region_to_send = []
    let region_intensity = []
    let region_likelihood = []
    let region_relevance = []
    for(i in data){
        var current_data = data[i].region;
        if(region_to_send.includes(current_data)){
        var ido = region_to_send.indexOf(data[i].region)
            if(region_intensity[ido] < data[i].intensity){
                region_intensity[ido] = data[i].intensity
            }
        }else{
    region_to_send.push(data[i].region)
    region_intensity.push(data[i].intensity)
    region_likelihood.push(data[i].likelihood)
    region_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess:true,
        data : {
            data1: region_to_send,
            data2: region_intensity,
            data3: region_likelihood,
            data4: region_relevance
        }
    }
    res.status(200).json(send_data)
}

exports.getSingle_region_int_lik_rel = async (req,res)=>{
    let region_name = req.params.id
    let region_intensity = []
    let region_likelihood = []
    let region_relevance = []
    for(var i in data){
        if(data[i].region===region_name){
            region_intensity.push(data[i].intensity)
            region_likelihood.push(data[i].likelihood)
            region_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: [region_name],
            data2: region_intensity,
            data3: region_likelihood,
            data4: region_relevance
        }
    }
    res.status(200).json(send_data)
}
