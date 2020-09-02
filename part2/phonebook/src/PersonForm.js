import React from 'react'; 

const PersonForm = ({name, number, nameChange, addContact, numberChange}) => {
    return (
      <form>
        <div>
          name: <input value={name} onChange={nameChange}/>
        </div>
        <div>
          number: <input value={number} onChange={numberChange}/>
        </div>
        <div>
          <button onClick={addContact} type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm; 
  