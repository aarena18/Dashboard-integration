let graph = document.getElementById("graph").getContext("2d");

new Chart(graph, {
  type: "line",
  data: {
    labels: [
      "5Nov",
      "6Nov",
      "7Nov",
      "8Nov",
      "9Nov",
      "10Nov",
      "11Nov",
      "12Nov",
      "13Nov",
      "14Nov",
      "15Nov",
    ],
    datasets: [
      {
        label: "ETH",
        data: [150, 600, 280, 300, 100, 400, 250, 700, 100, 480, 350],
        borderColor: "rgba(77, 145, 165, 1)",
        backgroundColor: "transparent",
      },
      {
        label: "BTC",
        data: [null, 220, 500, 700, 600, 450, 600, 550, 700, 400, null],
        borderColor: "rgba(89, 39, 149, 1)",
        backgroundColor: "transparent",
      },
      {
        label: "LTC",
        data: [null, null, null, 100, 350, 450, 200, 400, 300, 450, 150],
        borderColor: "rgba(25, 112, 214, 1)",
        backgroundColor: "transparent",
      },
    ],
  },

  options: {
      legend: {
        display: false,
      },
  },
});
