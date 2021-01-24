import './index.scss'

import { Component, Fragment } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import ReactFullpage from '@fullpage/react-fullpage'

import { navList, fullpageList } from '../../config/NavConfig'

import Header from '../../Components/HomePageComponents/Header'

import OnePiece from '../../assets/audioes/OnePiece.mp3'

const SEL = 'custom-section'
const SECTION_SEL = `.${SEL}`

const pluginWrapper = () => {
  
}

class HomePageContainer extends Component {
  state = {}

  renderNavList = (navList) => {
    return navList.map(({id, name, anchors}) => (
      <li data-menuanchor={anchors} key={id}>
        <a href={`#${anchors}`}>{name}</a>
      </li>
    ))
  }

  renderFullpageList = () => {
    return fullpageList.map(({ id, text, anchors, image, child }) => (
      <div 
        key={id} 
        className={SEL}
      >
        <img className={`fullpage-img`} src={image} alt={`${image}-${anchors}`} />
        <div className={`fullpage-content`}>
          <h1>{text}</h1>
          <div className={`fullpage-main-content`}>
            {child && child}
          </div>
        </div> 
      </div>
    ))
  }

  render() {
    if (!fullpageList.length) {
      return null
    }

    const NavComponent = () => (
      <div
        id={`myMenu`}
        className={`homePage-nav`}>
        <ul className='actions'>
          {this.renderNavList(navList)}
        </ul>
      </div>
    )

    return (
      <Fragment>
        <Header>
          <NavComponent />
        </Header>
        <div className={`main-page`}>
          <ReactFullpage
            navigation
            loopTop={true}
            menu={`#myMenu`}
            loopBottom={true}
            lazyLoading={true}
            lockAnchors={false}
            easingcss3={`ease`}
            scrollingSpeed={1000}
            loopHorizontal={true}
            licenseKey={'HomePageKey'}
            sectionSelector={SECTION_SEL}
            pluginWrapper={pluginWrapper}
            sectionsColor={this.state.sectionsColor}
            anchors={navList.map(({ anchors }) => (anchors))}
            onLeave={() => this.onLeave}

            render={() => (
              <ReactFullpage.Wrapper>
                {this.renderFullpageList(fullpageList)}
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
        <ReactAudioPlayer
          loop
          volume={0.2}
          className={`andio-player`}
          src={OnePiece}
          autoPlay
          controls
        />
      </Fragment>  
    )
  }
}

export default HomePageContainer
