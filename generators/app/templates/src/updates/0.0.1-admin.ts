import * as keystone from 'keystone'

const User = keystone.list('User')

export = function (done) {
  const admin = new User.model({
    email: '<%= adminLogin =%>',
    password: '<%= adminPassword =%>',
    name: { first: 'Admin', last: 'User' }
  })

  admin.isAdmin = true

  admin.save()
    .then(() => done())
    .catch(err => done(err))
}