
const data = require('../../_data/jsondata.json')

exports.getAllPestelcIntensity  = async (req,res)=>{
    let i;
    let check = []
    let new_check = []
    for(i in data){
        var current_data = data[i].pestle;
        if(check.includes(current_data)){
        var ido = check.indexOf(data[i].pestle)
            if(new_check[ido] < data[i].intensity){
                new_check[ido] = data[i].intensity
            }
        }else{
    check.push(data[i].pestle)
    new_check.push(data[i].intensity)
        }
    }
    const send_data = {
        sucess:true,
        data : {
            data1: check,
            data2: new_check
        }
    }
    res.status(200).json(send_data)
}

exports.getSinglePestelIntensity = async (req,res)=>{
    let topic_name = req.params.id
    let check = []
    for(var i in data){
        if(data[i].pestle===topic_name){
            check.push(data[i].intensity)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: topic_name,
            data2: check
        }
    }
    res.status(200).json(send_data)
}
