module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('MIDDLEWARE ERROR ---> ', err)
  }

  if (err.name && err.name === 'TokenExpiredError') {
    return res
      .status(401)
      .json({ error: 'Token expirado. Por favor autentique-se novamente' })
  }

  return res
    .status(500)
    .json({ error: 'Erro inesperado. Por favor tente novamente' })
}
