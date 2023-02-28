const allButtons = document.querySelector(".allButtons")

//  .allButtons.addEventListener('appendOperation', function appendOperation(operation) {
//   document.getElementById("ResInput").value += operation
//   document.getElementById("ResInput").focus()
//  })

  function appendOperation(operation) {
   document.getElementById("ResInput").value += operation
   document.getElementById("ResInput").focus()
  }

//   const ress = document.querySelector('#ress')
// ress.addEventListener("button", appendOperation)
 

function calculateResault(event) {
  event.preventDefault()

  let container = document.getElementById("ResInput")
  let result = eval(container.value)
  container.value = result
  document.getElementById("ResInput").focus()
}

const form = document.querySelector("#form")
form.addEventListener("submit", calculateResault)

function deleteLast() {
  let container = document.getElementById("ResInput")
  document.getElementById("ResInput").focus()

  if (container.value.endsWith(" ")) {
    container.value = container.value.slice(0, -3)
  } else {
    container.value = container.value.slice(0, -1)
  }
}

// value

const onClickOperation = (ev) => {
  // wert vom button dem input hinzufügen
  // ?? welchen wert hat der button?

  const wert = ev.target.dataset.wert;

  document.getElementById("ResInput").value += wert;
};

// [button, button, ...]
const operationButtons = document.querySelectorAll(".operation");
for (let i = 0; i < operationButtons.length; i += 1) {
  operationButtons[i].addEventListener("click", onClickOperation);
}
