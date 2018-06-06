import React, { Component } from 'react';

import { Form } from './styles';

class FormEdit extends Component {
  state = {
    form: {
      name: '',
      gender: '',
      birthday: '',
      city: '',
      state: '',
      country: '',
    },
  };

  onInputChange = fieldname => (e) => {
    const form = { ...this.state.form };
    form[fieldname] = e.target.value;
    this.setState({ form, ...this.state });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    console.log('submit');
  };

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <input
          placeholder="Nome"
          value={this.state.form.name}
          onChange={this.onInputChange('name')}
        />
      </Form>
    );
  }
}

export default FormEdit;
