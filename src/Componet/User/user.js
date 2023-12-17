export async function createUser(newUser){
    const response = await fetch('http://localhost:3000/user-route/createUser',{
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(newUser)
    })

    return response.json()
}

export async function getAllUsers(){
    const res = await fetch('http://localhost:3000/user-route/getAllUsers')
    return res.json()
}

export async function getSingleUser(id){
    const res = await fetch(`http://localhost:3000/user-route/singleUser/${id}`)

    return res.json()
}