import React from 'react';
import type {Node} from 'react';
import {WebView} from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <WebView
      source={{uri: 'https://dev02.comprealugueagora.com.br/'}}
      style={{marginTop: 40}}
    />
  );
};

export default App;
