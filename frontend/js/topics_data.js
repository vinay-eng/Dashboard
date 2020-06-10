const topic_params = document.getElementById('topic_params');
const sector_params = document.getElementById('sector_params');
const pestle_params = document.getElementById('pestle_params');
const region_params = document.getElementById('region_params');

const getName = async ()=>{
    await fetch('http://localhost:5000/intensity/topic')
        .then(res => res.json())
        .then(data=>{
            for(var i in data.data.data1){
                topic_params.innerHTML += `
                <option value="${data.data.data1[i]}">${data.data.data1[i]}</option>
            `
            }
        })
        await fetch('http://localhost:5000/intensity/sector')
        .then(res => res.json())
        .then(data=>{
            for(var i in data.data.data1){
                sector_params.innerHTML += `
                <option value="${data.data.data1[i]}">${data.data.data1[i]}</option>
            `
            }
        })
        await fetch('http://localhost:5000/intensity/region')
        .then(res => res.json())
        .then(data=>{
            for(var i in data.data.data1){
                region_params.innerHTML += `
                <option value="${data.data.data1[i]}">${data.data.data1[i]}</option>
            `
            }
        })
        await fetch('http://localhost:5000/intensity/pestle ')
        .then(res => res.json())
        .then(data=>{
            for(var i in data.data.data1){
                pestle_params.innerHTML += `
                <option value="${data.data.data1[i]}">${data.data.data1[i]}</option>
            `
            }
        })
}

getName()