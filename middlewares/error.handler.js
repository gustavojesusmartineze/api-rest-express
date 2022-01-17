function logErrors (err, req, res, next) {
  console.error('logErrors middleware');
  console.error(err);
  next(err);
}

function errorHandler (err, req, res, next) {
  console.error('errorHandler middleware');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

module.exports = {
  logErrors,
  errorHandler
};
