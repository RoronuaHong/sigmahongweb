import './Styles/main.css';
import './Styles.css';
import 'antd/dist/antd.css';

import ReactGa from 'react-ga';
import HomeApp from './Containers/HomePageContainer';
import { useEffect, React } from 'react';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-R5JQHPKSLG');

    // to report page view
    ReactGa.pageview('/');
    console.log(1);
  }, []);

  return (
    <div className='App'>
        <HomeApp />
    </div>
  );
}

export default App;
