import './index.scss';

import { Component, Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage'

// import CppImage from '../../assets/Images/HomePage/cpp.jpg'
// import UeImage from '../../assets/Images/HomePage/ue.jpg'
// import PaintingImage from '../../assets/Images/HomePage/painting.jpg'
// import dota2Image from '../../assets/Images/HomePage/dota2.jpg'
// import gameImage from '../../assets/Images/HomePage/game.jpg'
// import toolsImage from '../../assets/Images/HomePage/tools.jpg'
// import othersImage from '../../assets/Images/HomePage/others.jpg'

import { navList, fullpageList } from '../../config/NavConfig'


import Header from '../../Components/HomePageComponents/Header'
import MainList from '../../Components/HomePageComponents/Cpp/MainList'

const SEL = 'custom-section'
const SECTION_SEL = `.${SEL}`

const pluginWrapper = () => {
  
};

class HomePageContainer extends Component {
  state = {
    navList: [{
      id: 0,
      name: `C / C++`,
      anchors: `cpp`,
    }, {
      id: 1,
      name: `Unreal Engine`,
      anchors: `ue`,
    }, {
      id: 2,
      name: `Painting`,
      anchors: `painting`,
    }, {
      id: 3,
      name: `Dota2`,
      anchors: `dota2`,
    }, {
      id: 4,
      name: `Games`,
      anchors: `games`,
    }, {
      id: 5,
      name: `Tools`,
      anchors: `tools`,
    }, {
      id: 6,
      name: `Others`,
      anchors: `others`,
    }]
  }

  renderNavList = (navList) => {
    return navList.map(({id, name, anchors}) => (
      <li data-menuanchor={anchors} key={id}>
        <a href={`#${anchors}`}>{name}</a>
      </li>
    ))
  }

  renderFullpageList = () => {
    return fullpageList.map(({id, text, anchors, image,child}) => (
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

            render={component=> (
              <ReactFullpage.Wrapper>
                {this.renderFullpageList(fullpageList)}
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      </Fragment>  
    )
  }
}

export default HomePageContainer
