import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'us' };

  handleLanguage = language => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;
    return (
      <div className="ui container">
        <h1>
          {language === 'us' ? 'Select your language: ' : 'Seleccione su idioma:'}
          <i
            style={{ paddingLeft: '5px' }}
            className="us flag myflag"
            onClick={() => this.handleLanguage('us')}
          />
          <i
            className="es flag myflag"
            onClick={() => this.handleLanguage('es')}
          />
        </h1>
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
