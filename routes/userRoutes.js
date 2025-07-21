const router = require("express").Router();
const passport = require("passport");
const restrictTo = require("../middleware/role");
const User = require("../models/user");

// Get all patients (Doctors only)
router.get(
  "/patients",
  passport.authenticate("jwt", { session: false }),
  restrictTo("doctor"),
  async (req, res) => {
    try {
      const patients = await User.find({ role: "patient" }).select("-password");
      res.json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Get all doctors (Patients only)
router.get(
  "/doctors",
  passport.authenticate("jwt", { session: false }),
  restrictTo("patient"),
  async (req, res) => {
    try {
      const doctors = await User.find({ role: "doctor" }).select("-password");
      res.json(doctors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
