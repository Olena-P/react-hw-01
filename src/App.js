import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statisttics";
import FriendItem from "./components/FriendList/FriendItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendItem friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
