import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Members from './components/Member'
import MemberForm from './components/MemberForm'

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
     name: "Toneio",
      email: "toneio@toneioenter.io ",
      role:"maybe the owner, maybe the servant, maybe both"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>The "A" Team</h1>
      {/* we are going to pass a function down as a prop */}
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default  App;