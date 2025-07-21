const User = require("../models/user");

// Get all patients (for doctors)
exports.getPatients = async (req, res, next) => {
  try {
    const patients = await User.find({ role: "patient" }).select("-password");
    res.json(patients);
  } catch (err) {
    next(err);
  }
};

// Get all doctors (for patients)
exports.getDoctors = async (req, res, next) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");
    res.json(doctors);
  } catch (err) {
    next(err);
  }
};
