function Anagrams() {
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;

  if (word1 && word2) {
    const sortedWord1 = word1.split("").sort().join("");
    const sortedWord2 = word2.split("").sort().join("");

    if (sortedWord1 === sortedWord2) {
      document.getElementById("result").innerHTML = "Да, это анаграммы";
    } else {
      document.getElementById("result").innerHTML = "Нет, это не анаграммы";
    }
  } else {
    alert("Пожалуйста, введите оба слова");
  }
}
