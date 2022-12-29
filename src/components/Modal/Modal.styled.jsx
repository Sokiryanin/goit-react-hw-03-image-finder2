import styled from '@emotion/styled';

export const BigImage = styled.img`
  border-radius: 4px;
`;

export const modalStyle = {
  overlay: {
    zIndex: '345',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    padding: '0',
  },
};
