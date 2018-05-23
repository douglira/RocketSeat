import React, { Component } from 'react';
import moment from 'moment';
import { api } from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import Notification from '../../components/Notification';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { repositoryInput } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
      this.notify.show('Repositório não encontrado');
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Notification
          ref={(ref) => {
            this.notify = ref;
          }}
        />
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList {...this.state} />
      </Container>
    );
  }
}
