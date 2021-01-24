import './Styles/main.css'
import './Styles/markdownStyle.scss'
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
import AlgorithmContainer from './Containers/AlgorithmContainer/AlgorithmListContainer/index'
import DataStructureContainer from './Containers/DataStructureContainer/DataStructureListContainer/index'

import UEbasisContainer from './Containers/UEPageContainer/UEbasisContainer/index'
import UEbasisContentContainer from './Containers/UEPageContainer/UEbasisContentContainer/index'

import UEProdListsContainer from './Containers/UEProdContainer/UEProdListsContainer/index'
import UEprodContentContainer from './Containers/UEProdContainer/UEProdContentContainer/index'

import ChromeExtensionsContainer from './Containers/ToolsPageContainer/ChromeExtensionsContainer/index'

import DataStructureContentContainer from './Containers/DataStructureContainer/DataStructureContentContainer/index'

import AlgorithmContentContainer from './Containers/AlgorithmContainer/AlgorithmContentContainer/index'
import SummaryContentContainer from './Containers/CppPageContainer/SummaryContentContainer/index'

export default function App() {
  return (
    <Provider {...RootStore}>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeApp} />
          <Route exact path='/cpp-summary' component={SummaryContainer} />
          <Route path='/cpp-summary/content/:id' component={SummaryContentContainer} />

          <Route exact path='/cpp-algorithm' component={AlgorithmContainer} />
          <Route path='/cpp-algorithm/content/:id' component={AlgorithmContentContainer} />

          <Route exact path='/cpp-datastructure' component={DataStructureContainer} />
          <Route path='/cpp-datastructure/content/:id' component={DataStructureContentContainer} />

          <Route exact path='/ue-basis' component={UEbasisContainer} />
          <Route path='/ue-basis/content/:id' component={UEbasisContentContainer} />

          <Route exact path='/ue-production' component={UEProdListsContainer} />
          <Route path='/ue-production/content/:id' component={UEprodContentContainer} />

          <Route exact path='/tools-chrome' component={ChromeExtensionsContainer} />

          <Route path='/admin/login' component={LoginContainer} />
          <Route path='/admin/dashboard' component={DashboardContainer} />
          <Route exact path='/admin' component={DashboardContainer} />
          <Redirect from='/admin/dashboard/*' to='/admin/dashboard' />
          <Redirect from='/admin/*' to='/admin/dashboard' />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>
  )
}
