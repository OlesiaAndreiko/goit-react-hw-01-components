import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "../data/user.json"
import data from "../data/data.json"

export const App = () => {
  return <>
  <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'    
  }}>
    <Profile user = {user}/>
    <Statistics title="Upload stats" stats={data}/>
  </div>;
  </>
};
