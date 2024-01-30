import React, {useState} from 'react';

export function Exercise2() {
  const data={
    displayConversation: null,
    conversations: [
      {
        with: "Laura", convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" }
        ]
      },
      {
        with: "Dad", convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" }
        ]
      },
      {
        with: "Shoobert", convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ]
      }
    ]
  };
  const [DATA, setDATA] = useState(data);
  const showData = (id) => {
    let dataIndex = data.conversations.findIndex((f) => f.with === id);
    if (dataIndex !== -1) {
      let cloneDATA={...DATA}
      cloneDATA["displayConversation"]= data.conversations[dataIndex]
      setDATA(cloneDATA );
      //setDATA((prevData) => ({ ...prevData, displayConversation: data.conversations[dataIndex] }));
    }
  };
  const backFun = () => {
    setDATA((prevData) => ({ ...prevData, displayConversation: null }));
  };

  return (
    <>
      {DATA.displayConversation ? (
        <div>
      <button onClick={backFun}>Back</button>
          {DATA.displayConversation.convo.map((message, index) => (
            <div key={index}>{message.text}</div>
          ))}
        </div>
      ) : (
        
        <div>
          
          {DATA.conversations.map((conversation) => (
            <div key={conversation.with} onClick={() => showData(conversation.with)}>
              {conversation.with}
            </div>
          ))}
        </div>
      )}
    </>
  );
}