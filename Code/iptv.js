function start() {
  // Prompt the user to enter the first word
  var portal = prompt("Enter the portal");
  var word1 = prompt("Enter the Username");
  // Prompt the user to enter the second word
  var word2 = prompt("Enter the Password:");

  // Join the words and store the result in a new variable
  var joined = word1 + word2;

  // Display the joined words
    document.getElementById("root").innerHTML ="The Link is: " + portal + "/get.php?username=" + word1 + "&password="+word2+"&type=m3u&output=ts"

}
