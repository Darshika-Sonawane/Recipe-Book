import React from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SuprSendInbox 
        theme={{ bell: { color: '#ff0056'}}}
        workspaceKey="0aDAsNbfAqlpzLQjCHD0"
        subscriberId="your_subscriber_id"
        distinctId="your_distinct_id"
      />
      <Main />
      <Footer />
    </div>
  );
}


export default App;
