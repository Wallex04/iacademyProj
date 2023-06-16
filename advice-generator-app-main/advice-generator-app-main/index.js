let baseUrl = "https://api.adviceslip.com/advice",
  adviceNum = document.getElementById("adviceNum"),
  adviceBody = document.getElementById("adviceBody");
randomAdvice = document.getElementById("randomAdvice");

const generateAdvice = async () => {
  try {
    const response = await fetch(baseUrl);
    let responseJson = await response.json();
    console.log(responseJson);
    // adviceBody.innerText = `"${responseJson.slip.advice}"`;
    // adviceNum.innerText = `ADVICE #${responseJson.slip.id}`;
  } catch (error) {
    console.log(error);
  }
};

randomAdvice.addEventListener("click", generateAdvice);
window.addEventListener("load", generateAdvice);
