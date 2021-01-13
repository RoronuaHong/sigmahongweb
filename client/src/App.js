import './Styles/main.css'
import './Styles.css'
import 'antd/dist/antd.css'

import { React } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RootStore from './Stores/index.js'

import HomeApp from './Containers/HomePageContainer'
import DashboardContainer from './Containers/DashboardContainer/index'
import SummaryContainer from './Containers/CppPageContainer/SummaryContainer/index'
import AlgorithmContainer from './Containers/CppPageContainer/AlgorithmContainer/index'

export default function App() {
  return (
    <Provider {...RootStore}>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeApp} />
          <Route path='/cpp-summary' component={SummaryContainer} />
          <Route path='/cpp-algorithm' component={AlgorithmContainer} />
          <Route path='/admin'>
            <Route path='/admin/dashboard' component={DashboardContainer} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
