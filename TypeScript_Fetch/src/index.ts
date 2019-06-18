import fetch, { Response } from 'node-fetch';

interface Post {
    id ?: number,
    userId: number,
    title: string,
    body: string
}

async function main() {
    const urlBase = 'http://jsonplaceholder.typicode.com';
    /*
    //Realizar um GET
    let resposta: Response = await fetch(`${urlBase}/posts`);
    if (resposta.ok) {
        let posts: Post[] = await resposta.json();
        posts.forEach(p => { console.log(p.title); });
    } else {
        console.log(`GET sem sucesso: ${resposta.status}, ${resposta.statusText}`);
    }
    */
    /*
    //Realizar um GET
    let resposta: Response = await fetch(`${urlBase}/posts/1`);
    if (resposta.ok) {
        let posts: Post = await resposta.json();
        console.log(posts);
    } else {
        console.log(`GET sem sucesso: ${resposta.status}, ${resposta.statusText}`);
    }
    */
    try {
       /*
        // Realizar POST
        let post: Post = {
            title: "Um Um Super Post",
            body: "Um texto muito legal",
            userId: 1
        }
        let resposta: Response = await fetch(`${urlBase}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(post)
        });
        if (resposta.ok) {
            let posts: Post = await resposta.json();
            console.log(posts);
        } else {
            console.log(`GET sem sucesso: ${resposta.status}, ${resposta.statusText}`);
        }
        */
        let resposta: Response = await fetch(`${urlBase}/posts/1`, {method: "DELETE"});
        console.log(`${resposta.status}, ${resposta.statusText}`);
    } catch(erro) {
        console.log('Erro:');
        console.log(erro);
    }

}

main();
