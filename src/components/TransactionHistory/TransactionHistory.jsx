import PropTypes from 'prop-types';
import { TableHead } from "../TableHead/TableHead"
import { Transaction } from '../Transaction/Transaction';
import {Table, TableRow} from "./TransactionHistory.staled"

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead></TableHead>
      <tbody>
        {transactions.map(transaction => (   
        <TableRow key={transaction.id}>
          <Transaction  transaction={transaction}></Transaction>
        </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
