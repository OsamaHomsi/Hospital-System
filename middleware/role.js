module.exports = function restrictTo(role) {
  return function (req, res, next) {
    if (req.user.role !== role) {
      return res.status(403).json({ message: `Access denied: ${role} role required.` });
    }
    next();
  };
};
