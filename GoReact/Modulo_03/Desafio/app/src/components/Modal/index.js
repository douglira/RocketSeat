import React from 'react';
import PropTypes from 'prop-types';

import { Container, Actions, Button } from './styles';

const Modal = props => (
  <Container show={props.show}>
    <div
      id="modal-background"
      role="presentation"
      onClick={e => (e.target.id === 'modal-background' ? props.onCancel() : null)}
      onKeyDown={(e) => {
        if (e.keyCode === 27) {
          e.preventDefault();
          props.onCancel();
        }
      }}
    >
      <div>
        <h1>Adicionar novo usuário</h1>
        <input
          placeholder="Usuário no Github"
          onChange={props.onChange}
          ref={input => (input ? input.focus() : null)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              props.onOk();
            }
          }}
          value={props.value}
        />
        <Actions>
          <Button onClick={props.onCancel}>Cancelar</Button>
          <Button onClick={props.onOk} theme="success">
            Salvar
          </Button>
        </Actions>
      </div>
    </div>
  </Container>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;
