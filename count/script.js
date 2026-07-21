
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const res = document.getElementById('res')
const counter = document.getElementById('count')

let count = 0 ;

function updatevalues () {
    counter.textContent = count
}

inc.addEventListener('click', () => {
    count++
    updatevalues()
})

dec.addEventListener('click', () => {
    if (count>0) {
        count--
    }
    updatevalues()
})

res.addEventListener('click', () => {
    count = 0
    updatevalues()
})