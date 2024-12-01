const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");


app.use("/api/users", userRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
