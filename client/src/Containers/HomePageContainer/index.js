import './index.scss';

import { Component, Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import CppImage from '../../Images/HomePage/cpp.jpg'
import UeImage from '../../Images/HomePage/ue.jpg'
import PaintingImage from '../../Images/HomePage/painting.jpg'
import dota2Image from '../../Images/HomePage/dota2.jpg'
import gameImage from '../../Images/HomePage/game.jpg'
import toolsImage from '../../Images/HomePage/tools.jpg'
import othersImage from '../../Images/HomePage/others.jpg'

import Header from '../../Components/HomePageComponents/Header'

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

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
    }],
    fullpageList: [{
      id: 0,
      text: 'C / C++',
      anchors: `cpp`,
      image: CppImage
    }, {
      id: 1,
      text: 'Unreal Engine',
      anchors: `ue`,
      image: UeImage
    }, {
      id: 2,
      text: 'Painting',
      anchors: `painting`,
      image: PaintingImage,
    }, {
      id: 3,
      text: 'Dota2',
      anchors: `dota2`,
      image: dota2Image,
    }, {
      id: 4,
      text: 'Games',
      anchors: `games`,
      image: gameImage,
    }, {
      id: 5,
      text: 'Tools',
      anchors: `tools`,
      image: toolsImage,
    }, {
      id: 6,
      text: 'Others',
      anchors: `others`,
      image: othersImage,
    }]
  }

  render() {
    const { navList, fullpageList } = this.state;

    if (!fullpageList.length) {
      return null;
    };

    const NavComponent = () => (
      <div
        id={`myMenu`}
        className={`homePage-nav`}>
        <ul className='actions'>
          {navList.map(({id, name, anchors}) => (
            <li data-menuanchor={anchors} key={id}>
              <a href={`#${anchors}`}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    );

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
            navigationTooltips={['firstSlide', 'secondSlide']}
            onLeave={() => this.onLeave}

            render={component=> (
              <ReactFullpage.Wrapper>
                {fullpageList.map(({id, text, anchors, image}) => (
                  <div 
                    key={id} 
                    className={SEL}
                  >
                    <img className={`fullpage-img`} src={image} alt={`${image}-${anchors}`} />
                    <div className={`fullpage-content`}>
                      <h1>{text}</h1>
                    </div> 
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      </Fragment>  
    )
  }
}

export default HomePageContainer;
