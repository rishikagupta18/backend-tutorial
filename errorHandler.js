const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: messages.join(", ") });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "field";
    return res
      .status(409)
      .json({ success: false, message: `Duplicate value for ${field}` });
  }
  console.error(err);
  res.status(500).json({ success: false, message: "Server error" });
};

module.exports = errorHandler;
