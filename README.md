# Practical 8.2: greetings.jsp

This program demonstrates conditional logic in JSP by displaying time-based greetings (Node.js equivalent).

## How to run

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open in browser:
```
http://localhost:3004/
```

## What it does

- Gets the current hour from server time
- Displays different greetings based on time:
  - **Before 12pm:** "Good morning!"
  - **12pm-6pm:** "Good afternoon!"
  - **After 6pm:** "Good evening!"
- Demonstrates conditional logic and date manipulation

## Original JSP Code Reference

```jsp
<html>
<body bgcolor="white">
<% java.util.Date clock = new java.util.Date( ); %>
<% if (clock.getHours( ) < 12) { %>
<h1>Good morning!</h1>
<% } else if (clock.getHours( ) < 18) { %>
<h1>Good afternoon!</h1>
<% } else { %>
<h1>Good evening!</h1>
<% } %>
Welcome to our site, open 24 hours a day.
</body>
</html>
```
