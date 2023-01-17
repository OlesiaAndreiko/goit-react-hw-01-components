import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends}></FriendList>
        <TransactionHistory transactions={transactions}></TransactionHistory>
      </div>
      ;
    </>
  );
};
