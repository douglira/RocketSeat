import React, { Component } from 'react';
import { api } from '../../services/api';

import Notification from '../../components/Notification';
import SideBarItem from '../../components/SideBarItem';
import HeaderIssues from '../../components/HeaderIssues';
import InfoIssues from '../../components/InfoIssues';
import { Container, SideBar, IssuesContainer, Loading, EmptyIssuesText } from './styles';

class Main extends Component {
  state = {
    loading: false,
    loadingIssues: false,
    repositoryInput: '',
    repositories: [],
    activeRepository: {},
    activeIssues: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    if (!this.state.repositoryInput) return;
    this.setState({ loading: true });

    try {
      const { data } = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositories: [...this.state.repositories, data],
      });
    } catch (err) {
      this.notify.show('Repositório não encontrado!');
    } finally {
      this.setState({
        loading: false,
        repositoryInput: '',
      });
    }
  };

  handleFilterIssues = async (e) => {
    this.setState({ loadingIssues: true });

    let issueFilter = 'all';
    const { owner, name } = this.state.activeRepository;

    if (e) issueFilter = e.target.value;

    try {
      const response = await api.get(`/repos/${owner.login}/${name}/issues?state=${issueFilter}`);

      this.setState({ activeIssues: response.data });
    } catch (err) {
      this.notify.show('Um erro inesperado aconteceu. Tente novamente');
    } finally {
      this.setState({ loadingIssues: false });
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
        <SideBar>
          <form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="Buscar repositório"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {this.state.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <i className="fa fa-plus-circle" />
              )}
            </button>
          </form>
          <section>
            {this.state.repositories.map(item => (
              <SideBarItem
                key={item.id}
                repository={item}
                onSeeInfo={activeRepository =>
                  this.setState({ activeRepository }, () => this.handleFilterIssues())
                }
              />
            ))}
          </section>
        </SideBar>
        {this.state.activeRepository.id ? (
          <IssuesContainer>
            <HeaderIssues
              avatar={this.state.activeRepository.owner.avatar_url}
              name={this.state.activeRepository.name}
              login={this.state.activeRepository.owner.login}
              onSelect={this.handleFilterIssues}
            />
            {this.state.loadingIssues ? (
              <Loading>
                <p>
                  <i className="fa fa-spinner fa-pulse" />
                </p>
              </Loading>
            ) : (
              <InfoIssues issues={this.state.activeIssues} />
            )}
          </IssuesContainer>
        ) : (
          <EmptyIssuesText>
            Busque e selecione um repositório para exibir suas issues
          </EmptyIssuesText>
        )}
      </Container>
    );
  }
}

export default Main;
