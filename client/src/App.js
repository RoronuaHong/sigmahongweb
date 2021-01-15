import './Styles/main.css'
import './Styles.css'
import 'antd/dist/antd.css'

import { React } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import RootStore from './Stores/index'

import HomeApp from './Containers/HomePageContainer'
import LoginContainer from './Containers/LoginContainer/index'
import DashboardContainer from './Containers/DashboardContainer/index'
import SummaryContainer from './Containers/CppPageContainer/SummaryContainer/index'
import AlgorithmContainer from './Containers/CppPageContainer/AlgorithmContainer/index'

export default function App() {
  return (
    <Provider {...RootStore}>
      <Router>
        <Switch>
          <Route exact path='/' exact component={HomeApp} />
          <Route path='/cpp-summary' component={SummaryContainer} />
          <Route path='/cpp-algorithm' component={AlgorithmContainer} />

          <Route path='/admin/login' component={LoginContainer} />
          <Route path='/admin/dashboard' component={DashboardContainer} />
          <Route exact path='/admin' component={DashboardContainer} />
          <Redirect from="/admin/dashboard/*" to="/admin/dashboard" />
          <Redirect from="/admin/*" to="/admin/dashboard" />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </Provider>
  )
}
