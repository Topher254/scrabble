const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    users: [
      {firstName: "raph",
        lastName: "topher",
        userName: "raphtopher",
        gender: "m",
        password: "raph2024" },
      //{ username: 'Ron', score: 85, email: 'user2@example.com' ,chat_message: "Ukoje"},
      //{ username: 'Sam', score: 80, email: 'user3@example.com' ,chat_message: "Niko Poa"}
    ]
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
