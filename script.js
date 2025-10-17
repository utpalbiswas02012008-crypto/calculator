let result = document.querySelector('.result');
function appendToResult(value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function calculateResult()  {
	result.value = eval(result.value);