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