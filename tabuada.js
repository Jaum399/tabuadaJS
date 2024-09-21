function Tabuada() {
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')

    // Verifica se os campos estão preenchidos
    if (num.value === '' || end.value === '') {
        alert('Por favor, preencha ambos os campos antes de gerar a tabuada.')
        return
    }

    res.innerHTML = `A tabuada do ${n} é: <br>`
    do {
        r = n * x
        res.innerHTML += `${x} x ${n} = ${r} <br>`
        x++
    } while (x <= e)
}
