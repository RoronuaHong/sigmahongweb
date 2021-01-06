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
      name: `DOTA2`,
      anchors: `dota2`,
    }, {
      id: 4,
      name: `Games`,
      anchors: `games`,
    }, {
      id: 5,
      name: `Others`,
      anchors: `others`,
    }],
    fullpageList: [{
      id: 0,
      text: 'Section 1',
    },
    {
      id: 1,
      text: 'Section 2',
    },
    {
      id: 2,
      text: 'Section 3',
    },
    {
      id: 3,
      text: 'Section 4',
    },
    {
      id: 4,
      text: 'Section 5',
    },
    {
      id: 5,
      text: 'Section 6',
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
        className={`homePage-nav`}
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
        }}>
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
