const roles = {
  admin: {
    type: 'admin',
    inherits: 'user'
  },
  user: {
    type: 'user'
  }
}

function hasAccess (userRole, role) {
  let isAuthorized = false

  if (!userRole) {
    return isAuthorized
  }

  if (!roles[userRole]) {
    return isAuthorized
  }

  if (userRole === role) {
    isAuthorized = true
    return isAuthorized
  }

  if (!roles[userRole].inherits) {
    return isAuthorized
  }

  return hasAccess(roles[userRole].inherits, role)
}

module.exports = (role = 'user') => (req, res, next) => {
  if (!hasAccess(req.user.role, role)) {
    return res.status(401).json({ error: 'Usuário não autorizado' })
  }

  return next()
}
