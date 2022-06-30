document.querySelector('.cobre > input').value = 0
document.querySelector('.prata > input').value = 0
document.querySelector('.electro > input').value = 0
document.querySelector('.ouro > input').value = 0
document.querySelector('.platina > input').value = 0	

function converter() {
	const cobre = parseInt(document.querySelector('.cobre > input').value)
	const prata = parseInt(document.querySelector('.prata > input').value)
	const electro = parseInt(document.querySelector('.electro > input').value)
	const ouro = parseInt(document.querySelector('.ouro > input').value)
	const platina = parseInt(document.querySelector('.platina > input').value)	
	let real;

	function calculeReal(cobre, prata, electro, ouro, platina){
		a = ouro;
		a += cobre/100;
		a += prata/10;
		a += electro/2;
		a += platina*10;

		return a
	}

	real = calculeReal(cobre, prata, electro, ouro, platina)

	document.querySelector('.real-value').textContent = `${real}R$`
}