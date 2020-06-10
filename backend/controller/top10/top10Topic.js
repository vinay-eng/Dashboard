const data = require('../../_data/jsondata.json')
let dummy_data = data
let max_intensity_object_array = []
let max_intensity = 48;
exports.top10Topic = (req,res)=>{
    let max_intensity_object_array = []
    for(var i in dummy_data){
        if(dummy_data[i].intensity=== 48){
            max_intensity_object_array.push({
                topic_name:dummy_data[i].topic,
                topic_sector:dummy_data[i].sector,
                topic_region:dummy_data[i].region,
                topic_pestle:dummy_data[i].pestle,
                topic_intensity:dummy_data[i].intensity,
                topic_title:dummy_data[i].title,
                topic_source:dummy_data[i].source,
                topic_url:dummy_data[i].url,
                topic_index:i
            })
            
        }
    }
    res.json(max_intensity_object_array)
}
