import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/CppPageComponents/HeaderComponents/index'
import ContentComponents from '../../../Components/CppPageComponents/ContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('cppSummaryStore')
@observer
class SummaryContainer extends Component {
  handleTodos(type) {
    let { cppSummaryStore } = this.props
  
    switch(type) {
      case 'add':
        cppSummaryStore.addTodo(`一条新任务`)

        break
      case 'del':
        cppSummaryStore.delTodo()

        break
      case 'reset':
        cppSummaryStore.resetTodo()

        break
      default:
        cppSummaryStore.addTodo(`一条新任务`)

        break
    }
  }

  render() {
    let { cppSummaryStore } = this.props

    cppSummaryStore.getMyName()

    return (
      <div className={`summary-wrapper`}>
        <Layout>
          <HeaderComponents />
          <ContentComponents />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb CppSummary
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default SummaryContainer
