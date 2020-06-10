const data = require('../../_data/jsondata.json')

exports.getAllRegionIntensity  = async (req,res)=>{
    let i;
    let check = []
    let new_check = []
    for(i in data){
        var current_data = data[i].region;
        if(check.includes(current_data)){
        var ido = check.indexOf(data[i].region)
            if(new_check[ido] < data[i].intensity){
                new_check[ido] = data[i].intensity
            }
        }else{
    check.push(data[i].region)
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

exports.getSingleRegionIntensity = async (req,res)=>{
    let region_name = req.params.id
    let check = []
    for(var i in data){
        if(data[i].region===region_name){
            check.push(data[i].intensity)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: region_name,
            data2: check
        }
    }
    res.status(200).json(send_data)
}