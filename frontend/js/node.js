let render_node = `<div class="card-group">
<div class="card">
  <div class="card-body">
    <label for=""></label>
    
  </div>
</div>
`;

const slide2_id = document.getElementById('slide2')

const handle_again = ()=>{
  slide2_id.innerHTML = '';
  console.log('yo')
  fetch('http://localhost:5000/sendNode')
    .then(res=>res.json())
    .then(data=>{
        data.splice(3,1)
        
        if(document.getElementById('topic').checked){
          console.log('y01')
          for(var i in data){
            slide2_id.innerHTML +=`<div class="card-group" style="background-color:" antiquewhite;">
              <div class="card">
                <div class="card-body">
                  <label  for=""><h1 href="${data[i].topic_url}">${data[i].topic_name}</h1></label>
                  <p><strong>Title:</strong> ${data[i].topic_title}</p>
                  <p><strong>Source: </strong>${data[i].topic_source}</p>
                </div>
              </div>`
            }             
          }else if(document.getElementById('sector').checked){
            console.log('y02')
            for(var i in data){
              slide2_id.innerHTML +=`<div class="card-group" style="background-color:"antiquewhite;">
              <div class="card">
                <div class="card-body">
                  <label href="${data[i].topic_url}" for=""><h1>${data[i].topic_sector}</h1></label>
                  <p><strong>Title:</strong> ${data[i].topic_title}</p>
                  <p><strong>Source: </strong>${data[i].topic_source}</p>
                </div>
              </div>`
            }
          } else if(document.getElementById('region').checked){
            console.log('y03')
            for(var i in data){
              slide2_id.innerHTML +=`<div class="card-group" style="background-color:"antiquewhite;">
              <div class="card">
                <div class="card-body">
                  <label href="${data[i].topic_url}" for=""><h1>${data[i].topic_region}</h1></label>
                  <p><strong>Title:</strong> ${data[i].topic_title}</p>
                  <p><strong>Source: </strong>${data[i].topic_source}</p>
                </div>
              </div>`
            }
          } else if(document.getElementById('pestle').checked){
            console.log('y04')
            for( var i in data){
              slide2_id.innerHTML +=`<div class="card-group" style="background-color:"antiquewhite;">
              <div class="card" >
                <div class="card-body">
                  <label href="${data[i].topic_url}" for=""><h1>${data[i].topic_pestle}</h1></label>
                  <p><strong>Title:</strong> ${data[i].topic_title}</p>
                  <p><strong>Source: </strong>${data[i].topic_source}</p>
                </div>
              </div>`
            }
            
          }
    })
  }

document.querySelector('button').addEventListener('click',handle_again)