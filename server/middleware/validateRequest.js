const { validationResult } = require("express-validator");

function validateRequest(request, response, next) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: errors.array()
    });
  }

  next();
}

module.exports = validateRequest;
