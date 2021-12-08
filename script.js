const printContent = () => {
  console.log("I am printing content");
  window.print();
};

const togglePrintContent = () => {
  const printContent = document.getElementById("swampLand");

  if (printContent.style.display === "none") {
    printContent.style.display = "block";
  } else {
    printContent.style.display = "none";
  }
};
