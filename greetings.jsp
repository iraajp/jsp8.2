<%@page language="java" isThreadSafe="false" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>8.2 greetings.jsp</title>
    <style>
      body {
        font-family: system-ui, -apple-system, Arial, sans-serif;
        padding: 20px;
        background-color: white;
      }
    </style>
  </head>
  <body bgcolor="white">
    <h2>8.2 greetings.jsp - Time-based Greetings</h2>
    <% java.util.Date clock = new java.util.Date(); int hour = clock.getHours();
    if (hour < 12) { %>
    <h1>Good morning!</h1>
    <% } else if (hour < 18) { %>
    <h1>Good afternoon!</h1>
    <% } else { %>
    <h1>Good evening!</h1>
    <% } %>
    <p>Welcome to our site, open 24 hours a day.</p>
    <p><small>Current time: <%= new java.util.Date().toString() %></small></p>
    <p><a href="index.jsp">← Back to index</a></p>
  </body>
</html>
