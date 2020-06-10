
const data = require('../../_data/jsondata.json')

exports.getAll_sector_int_rel_lik  = async (req,res)=>{
    let i;
    let sector_to_send = []
    let sector_intensity = []
    let sector_likelihood = []
    let sector_relevance = []
    for(i in data){
        var current_data = data[i].sector;
        if(sector_to_send.includes(current_data)){
        var ido = sector_to_send.indexOf(data[i].sector)
            if(sector_intensity[ido] < data[i].intensity){
                sector_intensity[ido] = data[i].intensity
            }
        }else{
    sector_to_send.push(data[i].sector)
    sector_intensity.push(data[i].intensity)
    sector_likelihood.push(data[i].likelihood)
    sector_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess:true,
        data : {
            data1: sector_to_send,
            data2: sector_intensity,
            data3: sector_likelihood,
            data4: sector_relevance
        }
    }
    res.status(200).json(send_data)
}

exports.getSingle_sector_int_lik_rel = async (req,res)=>{
    let sector_name = req.params.id
    let sector_intensity = []
    let sector_likelihood = []
    let sector_relevance = []
    for(var i in data){
        if(data[i].sector===sector_name){
            sector_intensity.push(data[i].intensity)
            sector_likelihood.push(data[i].likelihood)
            sector_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: [sector_name],
            data2: sector_intensity,
            data3: sector_likelihood,
            data4: sector_relevance
        }
    }
    res.status(200).json(send_data)
}
