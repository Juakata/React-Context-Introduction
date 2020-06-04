import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label htmlFor="name">
            {this.context === 'en' ? 'Name' : 'Nombre'}:
            <input type="text" id="name" />
          </label>
        </div>
      </form>
    );
  }
}

export default Field;
