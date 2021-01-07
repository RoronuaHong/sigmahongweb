import './Styles/main.css';
import './Styles.css';
import 'antd/dist/antd.css';

import HomeApp from './Containers/HomePageContainer';
import { React } from 'react';

function App() {
  return (
    <div className='App'>
        <HomeApp />
    </div>
  );
}

export default App;
