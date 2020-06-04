import React from 'react';

class App extends React.Component {
  state = { language: 'us' };

  handleLanguage = language => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;
    return (
      <div className="ui container">
        <div>
          <h2>{language === 'us' ? 'Select your language: ' : 'Seleccione su idioma:'}</h2>
          <i className="us flag myflag" onClick={() => this.handleLanguage('us')} />
          <i className="es flag myflag" onClick={() => this.handleLanguage('es')} />
        </div>
      </div>
    );
  }
}

export default App;
