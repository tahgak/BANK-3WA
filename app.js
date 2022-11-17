function changeSoldeColor(){
  if (Number(solde.innerText) <= 1000) {
    solde.classList.add("text-danger")
  }else{
   solde.classList.add("text-success")
  }
}

if(localStorage.getItem('solde') === null) {
  localStorage.setItem('solde', 10000)
}

let btn = document.querySelector('.btn')
let solde = document.getElementById('credit')
let retrait = document.getElementById('retrait')
let error = document.getElementById('error')
let btn2 = document.querySelector('.btn-primary')
// show solde
solde.innerText = localStorage.getItem('solde')
changeSoldeColor()

btn2.addEventListener('click', () =>{
  localStorage.setItem('solde', 10000)
  solde.innerText = localStorage.getItem('solde')
} )
btn.addEventListener('click', (x) => {
  x.preventDefault()
  error.innerText = ""
  if (Number(solde.innerText) < Number(retrait.value)) {
    error.innerText = "solde insuffisant"
    error.classList.add('text-danger')
  } else {
    solde.innerText = Number(localStorage.getItem('solde')) - Number(retrait.value)
    localStorage.setItem('solde', solde.innerText)
  } 
  changeSoldeColor()
  retrait.value = ""
})

