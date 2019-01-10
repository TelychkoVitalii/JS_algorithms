import React, { Component } from 'react';

export default class RegistrationForm extends Component {
  render() {
    return (
      <Form>
        <Input
          name="userEmail"
          type="email"
          required />
        <Input
          name="userPassword"
          type="password"
          required />
        <Input
          name="confirmPassword"
          type="password"
          required />
        <Input
          name="firstName" />
        <Input
          name="lastName" />

        <button>Register</button>
      </Form>
    )
  }
}