const data = require('../../_data/jsondata.json')

exports.getAllSectorsLiklehood  = async (req,res)=>{
    let i;
    let check = []
    let new_check = []
    for(i in data){
        var current_data = data[i].sector;
        if(check.includes(current_data)){
        var ido = check.indexOf(data[i].sector)
            if(new_check[ido] < data[i].likelihood){
                new_check[ido] = data[i].likelihood
            }
        }else{
    check.push(data[i].sector)
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

exports.getSingleSectorLiklehood = async (req,res)=>{
    let sector_name = req.params.id
    let check = []
    for(var i in data){
        if(data[i].sector===sector_name){
            check.push(data[i].likelihood)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: sector_name,
            data2: check
        }
    }
    res.status(200).json(send_data)
}