function calculateSum() {
  let sum = 0;
  let n = document.getElementById("oneInput").value;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("oneResult").textContent = sum;
  return sum;
}

