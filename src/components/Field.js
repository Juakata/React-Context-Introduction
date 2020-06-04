import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label for="name">
            Name:
            <input type="text" id="name" />
          </label>
        </div>
      </form>
    );
  }
}

export default Field;
