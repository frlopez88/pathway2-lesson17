async function getData(){

    try {
      
        let response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        let responseBody = await response.json()
        
        renderTable(responseBody)

    } catch(err){
        
        console.log(err)

    }

    
}

function renderTable(responseBody){

    let tableLayOut = ` <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>`

    for (let i =0; i < responseBody.length; i++ ){

        tableLayOut += ` <tr>
                            <td>${responseBody[i].userId}</td>
                            <td>${responseBody[i].id}</td>
                            <td>${responseBody[i].title}</td>
                            <td>${responseBody[i].body}</td>
                        </tr> `
    }

    myData.innerHTML = tableLayOut
}


