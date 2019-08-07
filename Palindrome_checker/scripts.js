function palindrome(str) {
	str = str.toLowerCase();
  let chars = str.match(/\w/g).filter((i) => i !== "_");
	let reverse = []; 
	//reading from the end
  for (let c = chars.length - 1; c >= 0; c--) {
    reverse.push(chars[c]);
	}
	for (let i = 0; i < chars.length; i++) { //comparing each char in chars and reverse
    if (chars[i] !== reverse[i]) {
      return false;
      break;
    }
  }
  return true;
}


document.getElementById("checker").addEventListener("click", function() {
	var str = document.getElementById("string").value;
	if (palindrome(str)) {
		document.getElementById("found").style.display = "block";
	}
	else {
		document.getElementById("not-found").style.display = "block";
	}
});
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("string").value = "";
	document.getElementById("found").style.display = "none";
	document.getElementById("not-found").style.display = "none";
});