const router = require("express").Router();
const passport = require("passport");
const restrictTo = require("../middleware/role");

const {
  bookAppointment,
  cancelAppointment,
  getAppointments,
  getDoctorAppointments,
} = require("../controllers/appointmentController");
router.post("/book", passport.authenticate("jwt", { session: false }), bookAppointment);
router.post("/cancel", passport.authenticate("jwt", { session: false }), cancelAppointment);
router.get("/", passport.authenticate("jwt", { session: false }), getAppointments);
router.get(
  "/doctor",
  passport.authenticate("jwt", { session: false }),
  restrictTo("doctor"),
  getDoctorAppointments
);
module.exports = router;
