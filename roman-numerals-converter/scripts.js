function convertToRoman(num) {
	// the largest here is M
	//breaking into 'unique' numbers
		let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
		var roman = "";
		//iterating through all 'unique' numbers
		for (let i = 0; i < decimals.length; i++) {
			while (num >= decimals[i]) {
				roman += romans[i];
				num -= decimals[i];
			}
		}
		
	 return roman;
	}
	document.getElementById("convert").addEventListener("click", function() {
		let number = document.getElementById("number").value;
		number = Number(number);
		if (number > 0 && Number.isInteger(number)) {
			let roman = convertToRoman(number);
		document.getElementById("roman").value = roman;
		}
		else {
			alert("Only positive integer, please");
		}
	})