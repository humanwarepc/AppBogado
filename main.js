
const btn = document.getElementById ("botonAlerta");
const alert = document.getElementById ("alert")
const buton = document.getElementById ("cartaboton");
const carta = document.getElementById ("carta")


const alerta = ()=>{
	event.preventDefault()
	alert.style.display="block"
	btn.style.background="white"
	btn.style.color="#ed1f2a"
}

btn.addEventListener("click", alerta)



const mostrar = ()=>{
	event.preventDefault()
	carta.style.display="block"
	buton.style.background="white"
	buton.style.color="#ed1f2a"
}

btn.addEventListener("click", mostrar)


