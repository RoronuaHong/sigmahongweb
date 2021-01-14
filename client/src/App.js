import './Styles/main.css'
import './Styles.css'
import './Styles/umi.css'
import 'antd/dist/antd.css'
import 'ant-design-pro/dist/ant-design-pro.css'

import { React } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import RootStore from './Stores/index.js'

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
          <Route path='/' exact component={HomeApp} />
          <Route path='/cpp-summary' component={SummaryContainer} />
          <Route path='/cpp-algorithm' component={AlgorithmContainer} />
          <Route path='/test' component={SummaryContainer} />
          <Route path='/admins' component={DashboardContainer} />
          <Route path='/admins/login' component={LoginContainer} />
          <Route path='/admins/dashboard' component={DashboardContainer} />
          {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
          <Redirect from="/admins/*" to="/admin/dashboard" />
          <Redirect from="/*" to="/" component={HomeApp} />
        </Switch>
      </Router>
    </Provider>
  )
}
