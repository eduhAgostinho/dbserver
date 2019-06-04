let umaPessoa: string;
umaPessoa = 'John Doe';
let outraPessoa = 'Marry Doe';
let hoje = new Date();

// document.body.innerHTML = `Alô, ${umaPessoa}! Hoje é ${hoje.toDateString()}`;

document.body.innerHTML = alo(umaPessoa);

function alo(nome: string): string {
    return `Alô, ${nome}`;
}