const Appointment = require("../models/appointment");
const User = require("../models/user");

exports.bookAppointment = async (req, res, next) => {
  const { doctorId, date, description } = req.body;

  try {
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({ message: "Doctor not found or invalid role." });
    }

    const existing = await Appointment.findOne({
      doctor: doctorId,
      date: new Date(date),
    });

    if (existing) {
      return res.status(400).json({ message: "Doctor is not available at this time." });
    }

    const appointment = await Appointment.create({
      doctor: doctorId,
      patient: req.user._id,
      date: new Date(date),
      description,
    });

    res.status(201).json({ message: "Appointment booked", appointment });
  } catch (err) {
    next(err);
  }
};

// Cancel an appointment
exports.cancelAppointment = async (req, res) => {
  const { appointmentId } = req.body;
  try {
    const appointment = await Appointment.findOne({
      _id: appointmentId,
      patient: req.user._id,
    });

    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    await Appointment.deleteOne({ _id: appointmentId });
    res.json({ message: "Appointment canceled successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch user’s appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user._id })
      .populate("doctor", "name email")
      .sort({ date: 1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDoctorAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctor: req.user._id })
      .populate("patient", "name email")
      .sort({ date: 1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
