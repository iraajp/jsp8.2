const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
  const clock = new Date();
  const hour = clock.getHours();
  
  let greeting;
  if (hour < 12) {
    greeting = '<h1>Good morning!</h1>';
  } else if (hour < 18) {
    greeting = '<h1>Good afternoon!</h1>';
  } else {
    greeting = '<h1>Good evening!</h1>';
  }
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Practical 8.2: greetings.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>Practical 8.2: Time-based Greetings</h2>
  ${greeting}
  <p>Welcome to our site, open 24 hours a day.</p>
  <p><small>Current time: ${clock.toLocaleTimeString()}</small></p>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Practical 8.2 (greetings) running at http://localhost:${port}/`);
});
