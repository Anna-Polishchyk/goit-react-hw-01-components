import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  border-radius: 10%;
  overflow: hidden;
  width: 60px;
  margin-right: 20px;
  padding: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2) inset;
`;
export const Name = styled.p`
  color: #0b118f;
  font-size: 24px;
  font-weight: 700;
`;