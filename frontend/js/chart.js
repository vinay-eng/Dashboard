const go = document.querySelector('button');
//const main_page_chart = document.getElementById('main_page_chart').getContext('2d');
// let marksCanvas = document.querySelector('canvas')


const fetch_function = (fetch_URL)=>{
    console.log('fetch is running')
    fetch(fetch_URL)
            .then(res=>res.json())
            .then(data=>{
                
                let chart_object = [];
                if(document.getElementById('intensity_checked').checked){
                    console.log('intensity is running')
                    chart_object.push({label:"intensity",backgroundcolor:"rgba(200,0,0,0.2)",data:data.data.data2})
                    console.log(chart_object)
                }
                if(document.getElementById('liklehood_checked').checked){
                    console.log('liklehood is running')
                    chart_object.push({label:"liklehood",backgroundColor: "rgba(0,0,200,0.2)",data:data.data.data3})
                    console.log(chart_object)
                }
                if(document.getElementById('relevance_checked').checked){
                    console.log('relevance is running')
                    chart_object.push({label:"topic",backgroundColor: "rgba(0,200,0,0.2)",data:data.data.data4})
                    console.log(chart_object)
                }
                
                // let y_data = data.data.data2;   // array in numbers
                // let x_data = data.data.data1;   // array in strings
                // let marksCanvas = document.querySelector('canvas')
                // var radarChart = new Chart(marksCanvas, {
                //     type: 'radar',
                //     data: marksData,
                //     options: marksData
                // });
                var marksData = {
                    labels: data.data.data1,
                    datasets: chart_object
                  };
                   
                  var radarChart = new Chart(marksCanvas, {
                    type: 'radar',
                    data: marksData
                  }
                  
                  )    
                  
                })
}


const runMyChartFunction = ()=>{
    
    console.log('runMyfunction is running')
    
    if(document.getElementById('topic').checked){
        console.log('topic is running')
        let aside_tag = document.getElementsByTagName('aside')[0].getElementsByTagName('select')
        let x = aside_tag[0].selectedIndex;
        let option_tag = document.getElementsByTagName('aside')[0].getElementsByTagName('select')[0].getElementsByTagName('option')
        let option_value = option_tag[x].value

        // fetch and graph
        let fetch_URL = option_value == "allData" ? `http://localhost:5000/send_all_data/topic` : `http://localhost:5000/send_all_data/topic/${option_value}`

        fetch_function(fetch_URL)
          
    }else if(document.getElementById('sector').checked){
        console.log('sector is running')
        let article_tag = document.getElementsByTagName('article')[0].getElementsByTagName('select')
        let x = article_tag[0].selectedIndex;
        let option_tag = document.getElementsByTagName('article')[0].getElementsByTagName('select')[0].getElementsByTagName('option')
        let option_value = option_tag[x].value
        
        // fetch and graph
        let fetch_URL = option_value == "allData" ? `http://localhost:5000/send_all_data/sector` : `http://localhost:5000/send_all_data/sector/${option_value}`
        fetch_function(fetch_URL)



    }else if(document.getElementById('region').checked){
        console.log('region is running')
        let blockquote_tag = document.getElementsByTagName('blockquote')[0].getElementsByTagName('select')
        let x = blockquote_tag[0].selectedIndex;
        let option_tag = document.getElementsByTagName('blockquote')[0].getElementsByTagName('select')[0].getElementsByTagName('option')
        let option_value = option_tag[x].value
        
        // fetch and graph
        let fetch_URL = option_value == "allData" ? `http://localhost:5000/send_all_data/region` : `http://localhost:5000/send_all_data/region/${option_value}`
        console.log(fetch_URL)
        fetch_function(fetch_URL)


        
    }else if(document.getElementById('pestle').checked){
        let footer_tag = document.getElementsByTagName('footer')[0].getElementsByTagName('select')
        let x = footer_tag[0].selectedIndex;
        let option_tag = document.getElementsByTagName('footer')[0].getElementsByTagName('select')[0].getElementsByTagName('option')
        let option_value = option_tag[x].value
        
        // fetch and graph
        let fetch_URL = option_value == "allData" ? `http://localhost:5000/send_all_data/pestle` : `http://localhost:5000/send_all_data/pestle/${option_value}`
        console.log(fetch_URL)
        fetch_function(fetch_URL)


    }
}

go.addEventListener('click',runMyChartFunction);