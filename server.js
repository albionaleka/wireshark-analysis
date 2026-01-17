const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static("public"));

app.post("/api/login", (req, res) => {
  console.log("--- CAPTURED LOGIN DATA ---");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Username:", req.body.username);
  console.log("Password:", req.body.password);
  console.log("---------------------------");

  // Redirect to personal information form
  res.redirect("/personal-info.html");
});

app.post("/api/submit", (req, res) => {
  console.log("--- CAPTURED PERSONAL INFORMATION ---");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Full Name:", req.body.fullname);
  console.log("Email:", req.body.email);
  console.log("Phone:", req.body.phone);
  console.log("Address:", req.body.address);
  console.log("Date of Birth:", req.body.dob);
  console.log("SSN:", req.body.ssn);
  console.log("-------------------------------------");

  // Send a response so the browser doesn't hang, but simple enough to be just a confirmation
  res.send(`
        <h1>Data Captured!</h1>
        <p>Personal information has been submitted.</p>
        <p>Check your server console and Wireshark.</p>
        <p><a href="/">Go Back</a></p>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Ready to capture packets!");
});
