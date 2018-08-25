import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { Creators as AdminActions } from '~/store/ducks/admin';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { MaterialUI } from './styles';

class UsersTablePagination extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.shape().isRequired,
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.page === nextProps.page || this.props.rowsPerPage === nextProps.rowsPerPage) {
      return false;
    }

    return true;
  }

  handleFirstPageButtonClick = (event) => {
    // this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = (event) => {
    // this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = (event) => {
    // this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = (event) => {
    // this.props.onChangePage(
    //   event,
    //   Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    // );
  };

  render() {
    const {
      classes, count, page, rowsPerPage, theme,
    } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 1}
          aria-label="Primeira"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 1}
          aria-label="Anterior"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage)}
          aria-label="Próxima"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage)}
          aria-label="Última"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  allUsersRequest: (page, perPage) => dispatch(AdminActions.allUsersRequest(page, perPage)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(MaterialUI, { withTheme: true })(UsersTablePagination));
