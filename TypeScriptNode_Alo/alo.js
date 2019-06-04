var umaPessoa;
umaPessoa = 'John Doe';
var outraPessoa = 'Marry Doe';
var hoje = new Date();
// document.body.innerHTML = `Alô, ${umaPessoa}! Hoje é ${hoje.toDateString()}`;
document.body.innerHTML = alo(umaPessoa);
function alo(nome) {
    return "Al\u00F4, " + nome;
}
