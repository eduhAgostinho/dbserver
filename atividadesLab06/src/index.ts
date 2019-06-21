import fetch, { Response } from 'node-fetch';

async function exercicio1() {
    const url = 'https://reqres.in/api';
    interface User {
        name: string,
        job: string
    }
    try {
        //Get
        let resp: Response = await fetch(`${url}/users?page=2`);
        if (resp.ok) {
            let users = await resp.json();
            console.log(users);
        } else {
            console.log(`Sem sucesso: ${resp.status} ${resp.statusText}`);
        }

        //Post
        let user
        let newUser: User = {
            name: "Edu",
            job: "Intern"
        }
        let respPost: Response = await fetch(`${url}/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        if (respPost.ok) {
            let users = await respPost.json();
            console.log(users);
        } else {
            console.log(`Sem sucesso: ${respPost.status} ${respPost.statusText}`);
        }

        //Put
        let userUpdate: User = {
            name: 'morpheus',
            job: 'zion resident'
        }
        let respPut: Response = await fetch(`${url}/users/2`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userUpdate)
        });
        if (respPut.ok) {
            let users = await respPut.json();
            console.log(users);
        } else {
            console.log(`Sem sucesso: ${respPut.status} ${respPut.statusText}`);
        }
        
        // Patch 
        let userPatch: User = {
            name: 'morpheus',
            job: 'zion resident'
        }
        let respoPatch: Response = await fetch(`${url}/users/2`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userPatch)
        });
        if (respoPatch.ok) {
            let users = await respoPatch.json();
            console.log(users);
        } else {
            console.log(`Sem sucesso: ${respoPatch.status} ${respoPatch.statusText}`);
        }
        
        // Delete
        let respoDelete: Response = await fetch(`${url}/users/2`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        if (respoDelete.ok) {
            console.log(respoDelete);
        } else {
            console.log(`Sem sucesso: ${respoDelete.status} ${respoDelete.statusText}`);
        }
        
    } catch (error) {
        console.log(error);
    }

}
// exercicio1();


