import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import AlgorithmListComponentes from '../../../Components/AlgorithmComponents/AlgorithmListComponentes/index'
import HeaderComponents from '../../../Components/AlgorithmComponents/HeaderComponents/index'
import ContentComponents from '../../../Components/AlgorithmComponents/ContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('algorithmStore') 
@observer
class AlgorithmContainer extends Component {
  render() {
    const { algorithmStore } = this.props

    return (
      <div className={`algorithm-wrapper`}>
        <Layout>
          <HeaderComponents title={`Algorithm List`} />
          <ContentComponents>
            <AlgorithmListComponentes />
          </ContentComponents>
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb Algorithm
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default AlgorithmContainer
