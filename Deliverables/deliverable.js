function calculateSum() {
  let sum = 0;
  let n = document.getElementById("oneInput").value;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("oneResult").textContent = sum;
  return sum;
};

function printEvenNumbers(n) { 
    let i = 2;
     while (i <= n) { console.log(i); i += 2;}
     
    console.log("Even numbers up to 10:"); printEvenNumbers(10);
    console.log("Even numbers up to 20:");
};
   