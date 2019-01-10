export default {
  generic: {
    missing: 'Please provide the required field',
    invalid: 'The value you have provided is invalid'
  },

  type: {
    email: {
      missing: 'Please provide the e-mail',
      invalid: ({ value }) => `The e-mail "${value}" has invalid format`
    },
    password: {
      invalid: 'The password you entered is invalid',
      rule: {
        capitalLetter: 'Include at least one capital letter',
        minLength: 'Password must be at least 6 characters long'
      }
    }
  },

  name: {
    confirmPassword: {
      rule: {
        matches: 'The passwords do not match'
      }
    }
  }
};