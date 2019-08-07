function rot13(str) {
  var chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (/[A-Z]/.test(chars[i])) {
      chars[i] = String.fromCharCode(
        65 + ((chars[i].charCodeAt() - 65 + 13) % 26)
      );
    }
  }
  return chars.join("");
}

document.getElementById("convert").addEventListener("click", function() {
  let input = document.getElementById("input").value;
  input = input.toUpperCase();
  let output = rot13(input);
  document.getElementById("output").value = output;
});

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
});
