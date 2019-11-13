import  React, {useState} from 'react';

const MemberForm = props => {
    const [member, setMember]= useState({name:"", email:"", role:"" });

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };



  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role:"" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="member"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="member"
        type="text"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        id="member"
        type="text"
        name="role"
        onChange={handleChanges}
        value={member.role} 
      />
      <button type="submit">Add New Member</button>
    </form>
  );
};

export default MemberForm;