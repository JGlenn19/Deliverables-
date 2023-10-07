function calculateSum() {
  let sum = 0;
  let n = document.getElementById("oneInput").value;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("oneResult").textContent = sum;
  return sum;
}

function printEvenNumbers() {
    
    const inputElement = document.getElementById("numberInput");
    const n = parseInt(inputElement.value);

    if (isNaN(n)) {
      alert("Please enter a valid number.");
      return;
    }

  console.log("Even numbers up to 10:");
  printEvenNumbers(10);
  console.log("Even numbers up to 20:");
  const evenNumbers = [];

     
      for (let i = 2; i <= n; i += 2) {
        evenNumbers.push(i);
      }

      
      const resultElement = document.getElementById("result");
      resultElement.textContent = "Even numbers: " + evenNumbers.join(", ");
    }
  





