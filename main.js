async function getData() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/comments")
        let responseBody = await response.json()

        createTableGrid(responseBody)

    } catch (err) {

        console.log(err)

    }


}

function createTableGrid(responseBody) {

    let table = new gridjs.Grid({
        columns : ['Post Id', 'Id', 'Name', 'Email', 'Body'],
        data: responseBody,
        pagination: {
            limit: 5,
            summary: true
        }, 
        style : {
            th : {
                'background-color' : '#3483eb', 
                'color': '#484e57'
            }
        },
        search : true, 
        sort : true
    })
    let tableOutput = document.getElementById("myData")
    table.render(tableOutput)

}


getData()
/*function renderTable(responseBody){

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
}*/


