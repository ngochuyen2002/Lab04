import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/global.scss";
import Shop from "./Exercise_api";
import { useState } from "react";
import useMessages from "./Exerciseone_seven_one/useMessages";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import SwipeButton from "./Components/SwipeButtons";
function App() {
  {
    /*
    const [forum, setForum] = useState("nasa");
  const {
    data: messages,
    loading: messageLoading,
    error: messagesError,
  } = useMessages(forum); */
  }
  return (
    <div className="App">
      <Shop />
      {/* 1-7-API */}

      {/* 1-7-1 - Connect to Services
      <button onClick={() => setForum("nasa")}>NASA</button>
      <button onClick={() => setForum("notNasa")}>Not NASA</button>
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">{messagesError.message}</div>
        </div>
      ) : messageLoading ? (
        <div className="loading">Loading....</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <div key={m.id}>
              <dt>{m.author}</dt>
              <dt>{m.text}</dt>
            </div>
          ))}
        </dl>
      ) : (
        "No messages"
      )}*/}

      {/** Create tinder
      <Header />
      <TinderCards />
      <SwipeButton /> */}
    </div>
  );
}

export default App;
