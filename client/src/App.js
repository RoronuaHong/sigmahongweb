import './Styles/main.css';
import './Styles.css';
import 'antd/dist/antd.css';

import ReactGa from 'react-ga';
import HomeApp from './Containers/HomePageContainer';
import { useEffect, React } from 'react';

ReactGa.initialize('G-R5JQHPKSLG');

function App() {
  useEffect(() => {
    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
        <HomeApp />
    </div>
  );
}

export default App;
