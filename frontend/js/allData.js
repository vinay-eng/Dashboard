
const tabale_api_list = document.getElementById('tabale_api_list')
const getAllData = async ()=>{
    await fetch('http://localhost:5000/getAllData')
        .then(res=> res.json())
        .then(data=>{
            for(var i in data.data){
                tabale_api_list.innerHTML += `<tr>
                    <td data-label="Title">${data.data[i].title}</td>
                    <td data-label="Topic">${data.data[i].topic}</td>
                    <td data-label="Year">${data.data[i].end_year}</td>
                    <td data-label="Intensity">${data.data[i].intensity}</td>
                    <td data-label="Sector">${data.data[i].sector}</td>
                    <td data-label="Region">${data.data[i].region}</td>
                    <td data-label="Pestel">${data.data[i].pestle}</td>
                    </tr>` 
            }
        })
}

getAllData()