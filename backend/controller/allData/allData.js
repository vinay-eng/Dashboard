const data =require('../../_data/jsondata.json')
exports.getAllData = async (req, res)=>{
    let new_data = [];
    let dummy_object;
    let check_topic = [];
    let i;

    for(i = 0; i<100;i++){
        dummy_object = {
            title:'',
            topic:'',
            end_year:0,
            intensity:0,
            sector:'',
            region:'',
            pestle:''
        };
        dummy_object.title = data[i].title;
        dummy_object.topic = data[i].topic;
        dummy_object.end_year = data[i].end_year;
        dummy_object.intensity = data[i].intensity;
        dummy_object.sector = data[i].sector;
        dummy_object.region = data[i].region;
        dummy_object.pestle = data[i].pestle;
        new_data.push(dummy_object)

    }
    res.status(200).json({data:new_data})

}