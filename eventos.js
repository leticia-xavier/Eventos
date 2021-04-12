function Calcular()
{
	
	var pessoal = parseFloat(document.getElementById("pessoal").value)
	var comidas = parseFloat(document.getElementById("comidas").value)
	var bebidas = parseFloat(document.getElementById("bebidas").value)
	var locacao = parseFloat(document.getElementById("locacao").value)
	var outros = parseFloat(document.getElementById("outros").value)
	
	//alert("Gastos com pessoal = " + pessoal)
	
	// isNan = função que retorna verdadeiro se objeto não for número
	// || =  Operador lógico Ou (OR) -
	// Validar os números
	if ( isNaN(pessoal) || isNaN(comidas) ||
		 isNaN(bebidas) || isNaN(locacao) ||
		 isNaN(outros))
	{
		// Deu erro - avisar
		alert("Todos os números devem ter valores válidos (pode ser 0)")
	}
	else
	{
		// validação ok - fazer  o cálculo
		var soma = pessoal + comidas + bebidas + locacao + outros
		//alert ("total é" + soma)
		var obTot = document.getElementById("total")
		obTot.value = soma.toFixed(2)
	}
}