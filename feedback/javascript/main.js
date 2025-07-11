let feedback = document.getElementById("feedback");

if (feedback) {
  feedback.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
   
    sessionStorage.setItem("feedbackData", JSON.stringify({ name, email, comment }));

    window.location.href = "../feedb/feedback.html";
  });
}

let feedbackDisplay = document.getElementById("feedbackDisplay");
if (feedbackDisplay) {
  const data = sessionStorage.getItem("feedbackData");
  if (data) {
    const { name, email, comment } = JSON.parse(data);
    feedbackDisplay.innerHTML = `
      <h3>Feedback Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${comment}</p>
    `;
 
    sessionStorage.removeItem("feedbackData");
  }
}