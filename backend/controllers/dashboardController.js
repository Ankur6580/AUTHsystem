exports.getDashboard = (req, res) => {
  console.log("inside dashboard");

  res.json({
    message: "Welcome to your dashboard!",
  });
};
