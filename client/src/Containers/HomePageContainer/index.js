import './index.scss';

import { Component, Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

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
    }, {
      id: 1,
      text: 'Unreal Engine',
    }, {
      id: 2,
      text: 'Painting',
    }, {
      id: 3,
      text: 'DOTA2',
    }, {
      id: 4,
      text: 'Games',
    }, {
      id: 5,
      text: 'Tools',
    }, {
      id: 6,
      text: 'Others',
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
          showActiveTooltip={true}
          licenseKey={'HomePageKey'}
          sectionSelector={SECTION_SEL}
          pluginWrapper={pluginWrapper}
          sectionsColor={this.state.sectionsColor}
          anchors={navList.map(({ anchors }) => (anchors))}
          navigationTooltips={['firstSlide', 'secondSlide']}
          onLeave={() => this.onLeave}

          render={component=> (
            <ReactFullpage.Wrapper>
              {fullpageList.map(({ id, text}) => (
                <div 
                  key={id} 
                  className={SEL}
                >
                  <h1>{text}</h1>
                  <img src={``} alt={``} />
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </Fragment>  
    )
  }
}

export default HomePageContainer;
