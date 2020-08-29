// Core
import React from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import { ModalWrapper, ModalContainer, Cross } from './styles';

export const Modal = ({ children, closeHandler }) => {
  const { goBack } = useHistory();

  const stopPropagation = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  const hideModal = () => void goBack();

  return (
    <ModalWrapper>
      <ModalContainer onClick={(event) => void stopPropagation(event)}>
        <Cross onClick={closeHandler || hideModal} />
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};
