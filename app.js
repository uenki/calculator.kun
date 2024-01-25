function appendToinput(value) {
  document.getElementById("input").value += value;
}

function clearinput() {
  document.getElementById("input").value = "";
}

function backspace() {
  var input = document.getElementById("input");
  var currentContent = input.value;

  if (currentContent.length > 0) {
    var newContent = currentContent.substring(0, currentContent.length - 1);
    input.value = newContent;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    backspace();
  }
});

function calculateResult() {
  try {
    const result = eval(document.getElementById("input").value);
    document.getElementById("input").value = result;
  } catch (error) {
    console.log(error);
    document.getElementById("input").value = "Error";
  }
}
