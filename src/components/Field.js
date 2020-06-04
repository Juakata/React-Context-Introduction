import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div className="field">
        <label htmlFor="name">
          {this.context === 'en' ? 'Name' : 'Nombre'}:
          <input type="text" id="name" />
        </label>
      </div>
    );
  }
}

export default Field;
