
const data = require('../../_data/jsondata.json')

exports.getAllPestelLiklehood  = async (req,res)=>{
    let i;
    let check = []
    let new_check = []
    for(i in data){
        var current_data = data[i].pestel;
        if(check.includes(current_data)){
        var ido = check.indexOf(data[i].pestel)
            if(new_check[ido] < data[i].likelihood){
                new_check[ido] = data[i].likelihood
            }
        }else{
    check.push(data[i].pestel)
    new_check.push(data[i].likelihood)
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

exports.getSinglePestelLiklehood = async (req,res)=>{
    let topic_name = req.params.id
    let check = []
    for(var i in data){
        if(data[i].pestel===topic_name){
            check.push(data[i].likelihood)
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
