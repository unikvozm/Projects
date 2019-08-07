const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	const suffix = this.dataset.sizing || ''; 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	const spacing = document.querySelector('#spacing').value;
	const width = 600 - (spacing * 2); 
	document.querySelector('img').style.setProperty("width", width + 'px');
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));