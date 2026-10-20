function errorHandler(error, request, response, next) {
  console.error(error);

  const statusCode = error.statusCode || 500;
  response.status(statusCode).json({
    success: false,
    message: error.message || "An unexpected server error occurred."
  });
}

module.exports = errorHandler;
