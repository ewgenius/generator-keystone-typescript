import * as keystone from 'keystone'
const Types = keystone.Field.Types

const <%= userModel =%> = new keystone.List('<%= userModel =%>')

<%= userModel =%>.add({
  name: {
    type: Types.Name,
    required: true,
    index: true
  },
  email: {
    type: Types.Email,
    initial: true,
    required: true,
    index: true
  },
  password: {
    type: Types.Password,
    initial: true,
    required: true
  },
}, 'Permissions', {
    isAdmin: {
      type: Boolean,
      label: 'Can access Keystone',
      index: true
    }
  }
)

<%= userModel =%>.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin
})

<%= userModel =%>.defaultColumns = 'name, email, isAdmin'
<%= userModel =%>.register()