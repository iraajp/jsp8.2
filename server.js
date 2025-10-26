const express = require('express');
const app = express();
const port = 3004;

app.use(express.static(__dirname));

app.get('/api/greeting', (req, res) => {
  const hour = new Date().getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = 'Good morning!';
  } else if (hour < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }
  
  res.json({ message: greeting, time: new Date().toLocaleTimeString() });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
