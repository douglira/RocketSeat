import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  }

  state = {
    favorites: [
      {
        id: 111684721,
        name: 'serie-api-rest-node',
        full_name: 'Rocketseat/serie-api-rest-node',
        owner: {
          login: 'Rocketseat',
          id: 28929274,
          avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Rocketseat',
          html_url: 'https://github.com/Rocketseat',
          followers_url: 'https://api.github.com/users/Rocketseat/followers',
          following_url: 'https://api.github.com/users/Rocketseat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Rocketseat/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/Rocketseat/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Rocketseat/subscriptions',
          organizations_url: 'https://api.github.com/users/Rocketseat/orgs',
          repos_url: 'https://api.github.com/users/Rocketseat/repos',
          events_url: 'https://api.github.com/users/Rocketseat/events{/privacy}',
          received_events_url: 'https://api.github.com/users/Rocketseat/received_events',
          type: 'Organization',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/Rocketseat/serie-api-rest-node',
        description: 'Código da série de API REST com NodeJS no Youtube (http://youtube.com/rocketseat)',
        fork: false,
        url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node',
        forks_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/forks',
        keys_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/teams',
        hooks_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/hooks',
        issue_events_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/issues/events{/number}',
        events_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/events',
        assignees_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/assignees{/user}',
        branches_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/tags',
        blobs_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/languages',
        stargazers_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/stargazers',
        contributors_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/contributors',
        subscribers_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/subscribers',
        subscription_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/subscription',
        commits_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/contents/{+path}',
        compare_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/merges',
        archive_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/downloads',
        issues_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/issues{/number}',
        pulls_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/labels{/name}',
        releases_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/releases{/id}',
        deployments_url: 'https://api.github.com/repos/Rocketseat/serie-api-rest-node/deployments',
        created_at: '2017-11-22T13:00:52Z',
        updated_at: '2018-04-29T23:30:55Z',
        pushed_at: '2018-01-23T11:45:33Z',
        git_url: 'git://github.com/Rocketseat/serie-api-rest-node.git',
        ssh_url: 'git@github.com:Rocketseat/serie-api-rest-node.git',
        clone_url: 'https://github.com/Rocketseat/serie-api-rest-node.git',
        svn_url: 'https://github.com/Rocketseat/serie-api-rest-node',
        homepage: null,
        size: 18,
        stargazers_count: 6,
        watchers_count: 6,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 5,
        mirror_url: null,
        archived: false,
        open_issues_count: 1,
        license: null,
        forks: 5,
        open_issues: 1,
        watchers: 6,
        default_branch: 'master',
        organization: {
          login: 'Rocketseat',
          id: 28929274,
          avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Rocketseat',
          html_url: 'https://github.com/Rocketseat',
          followers_url: 'https://api.github.com/users/Rocketseat/followers',
          following_url: 'https://api.github.com/users/Rocketseat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Rocketseat/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/Rocketseat/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Rocketseat/subscriptions',
          organizations_url: 'https://api.github.com/users/Rocketseat/orgs',
          repos_url: 'https://api.github.com/users/Rocketseat/repos',
          events_url: 'https://api.github.com/users/Rocketseat/events{/privacy}',
          received_events_url: 'https://api.github.com/users/Rocketseat/received_events',
          type: 'Organization',
          site_admin: false,
        },
        network_count: 5,
        subscribers_count: 5,
      },
    ],
  }

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  )

  render() {
    return (
      <View style={styles.container} >
        { !this.state.favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado</Text>
          : this.renderList() }
      </View>
    );
  }
}

export default Favorites;
