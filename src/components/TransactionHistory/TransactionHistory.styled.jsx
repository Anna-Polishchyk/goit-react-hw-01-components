import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #FFF2DE;
`;
export const TableHead = styled.thead`
  color: #0b118f;
  font-size: 24px;
  font-weight: 700;
  background-color: #00bcd5;
`;
export const TableBody = styled.tbody`
  font-size: 18px;
  font-weight: 500;
`;
export const TableRow = styled.tr`
  margin-top: 10px;
  margin-bottom: 10px;
  :nth-child(even) {
    background-color: #ecf1f3;}
`;
export const TableHeadСell = styled.th`
  text-align: center;
  padding: 15px;
`;
export const TableBodyСell = styled.td`
  text-align: center;
  padding: 10px;
`;