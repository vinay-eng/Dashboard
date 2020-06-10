
const data = require('../../_data/jsondata.json')

exports.getAll_topic_int_rel_lik  = async (req,res)=>{
    let i;
    let topic_to_send = []
    let topic_intensity = []
    let topic_likelihood = []
    let topic_relevance = []
    for(i in data){
        var current_data = data[i].topic;
        if(topic_to_send.includes(current_data)){
        var ido = topic_to_send.indexOf(data[i].topic)
            if(topic_intensity[ido] < data[i].intensity){
                topic_intensity[ido] = data[i].intensity
            }
        }else{
    topic_to_send.push(data[i].topic)
    topic_intensity.push(data[i].intensity)
    topic_likelihood.push(data[i].likelihood)
    topic_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess:true,
        data : {
            data1: topic_to_send,
            data2: topic_intensity,
            data3: topic_likelihood,
            data4: topic_relevance
        }
    }
    res.status(200).json(send_data)
}

exports.getSingle_topic_int_lik_rel = async (req,res)=>{
    let topic_name = req.params.id
    let topic_intensity = []
    let topic_likelihood = []
    let topic_relevance = []
    for(var i in data){
        if(data[i].topic===topic_name){
            topic_intensity.push(data[i].intensity)
            topic_likelihood.push(data[i].likelihood)
            topic_relevance.push(data[i].relevance)
        }
    }
    const send_data = {
        sucess: true,
        data:{
            data1: [topic_name],
            data2: topic_intensity,
            data3: topic_likelihood,
            data4: topic_relevance
        }
    }
    res.status(200).json(send_data)
}
