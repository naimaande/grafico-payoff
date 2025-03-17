<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grafico Payoff - Call Option</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2 style="text-align: center;">Grafico Payoff - Call Option</h2>

  <div class="slider">
    <label>Strike Price: <span id="strikeLabel">100</span> €</label>
    <input type="range" id="strikePrice" min="50" max="150" value="100" step="1">
    <br><br>
    <label>Premium: <span id="premiumLabel">10</span> €</label>
    <input type="range" id="premium" min="0" max="50" value="10" step="1">
  </div>

  <canvas id="payoffChart"></canvas>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@1.2.0"></script>
  <script src="script.js"></script>
</body>
</html>
