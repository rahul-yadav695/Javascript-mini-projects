

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const Boy = document.getElementById('Boy')
    const Girl = document.getElementById('Girl')

    const B1 = Boy.value.length;
    const G2 = Girl.value.length;

    const Result = Math.pow(B1 + G2) % 101

    document.querySelector('#result').textContent = `${Result}%`
})