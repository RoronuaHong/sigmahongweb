import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import DataStructureListComponentes from '../../../Components/DataStructureComponents/DataStructureListComponentes/index'
import HeaderComponents from '../../../Components/DataStructureComponents/HeaderComponents/index'
import ContentComponents from '../../../Components/DataStructureComponents/ContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bdatastructureStore')
@observer
class DataStructureListContainer extends Component {
  render() {
    return (
      <div className={`datastructure-wrapper`}>
        <Layout>
          <HeaderComponents />
          <ContentComponents>
            <DataStructureListComponentes />
          </ContentComponents>
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb DataStructure
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default DataStructureListContainer
