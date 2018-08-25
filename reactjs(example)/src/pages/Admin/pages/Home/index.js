import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { connect } from 'react-redux';
import { Creators as AdminActions } from '~/store/ducks/admin';

import {
  withStyles,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Typography,
} from '@material-ui/core';
import { Container, MaterialUI } from './styles';

import UsersTablePagination from './components/UsersTablePagination';

class Home extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    allUsersRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      loading: PropTypes.bool,
      page: PropTypes.number,
      perPage: PropTypes.number,
      lastPage: PropTypes.number,
      total: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        displayName: PropTypes.string,
        email: PropTypes.string,
      })),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { allUsersRequest, users } = this.props;
    const { page, perPage } = users;
    allUsersRequest(page, perPage);
  }

  handleChangePage = (event, page) => {
    const { allUsersRequest, users } = this.props;

    if (page === 0) {
      return null;
    }

    if (page === users.page) {
      return null;
    }

    return allUsersRequest(page, users.perPage);
  };

  handleChangeRowsPerPage = (event) => {
    const { allUsersRequest, users } = this.props;
    allUsersRequest(users.page, event.target.value);
  };

  handleDisplayedRows = ({
    from, to, count, page,
  }) => `${page === 1 ? 1 : from} - ${to} de ${count}`;

  renderTableContent = () => this.props.users.data.map(user => (
    <TableRow key={user.id}>
      <TableCell component="th" scope="row">
        {user.displayName}
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell numeric>{moment(user.createdAt).format('DD/MM/YYYY HH:mm')}</TableCell>
    </TableRow>
  ));

  render() {
    const { classes, users } = this.props;

    if (users.loading) {
      return <p>Carregando lista de usuários...</p>;
    }

    return (
      <Container>
        <Typography className={classes.title} variant="title" gutterBottom>
          Relatório de usuários
        </Typography>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nome do usuário</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell numeric>Data de criação</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTableContent()}</TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    colSpan={3}
                    count={parseInt(users.total, 10)}
                    page={parseInt(users.page, 10)}
                    rowsPerPage={parseInt(users.perPage, 10)}
                    labelDisplayedRows={this.handleDisplayedRows}
                    labelRowsPerPage="Por página:"
                    rowsPerPageOptions={[10, 15, 20, 35, 50]}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={pagintaionProps => (
                      <UsersTablePagination {...pagintaionProps} lastPage={users.lastPage} />
                    )}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.admin.allUsers,
});

const mapDispatchToProps = dispatch => ({
  allUsersRequest: (page, perPage) => dispatch(AdminActions.allUsersRequest(page, perPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(MaterialUI)(Home));
