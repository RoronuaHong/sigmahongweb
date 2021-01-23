import MainList from '../Components/HomePageComponents/Cpp/MainList'
import UEMainList from '../Components/HomePageComponents/UE/MainList'
import ToolsMainList from '../Components/HomePageComponents/Tools/MainList'

import CppImage from '../assets/Images/HomePage/cpp.jpg'
import UeImage from '../assets/Images/HomePage/ue.jpg'
import PaintingImage from '../assets/Images/HomePage/painting.jpg'
import dota2Image from '../assets/Images/HomePage/dota2.jpg'
import gameImage from '../assets/Images/HomePage/game.jpg'
import toolsImage from '../assets/Images/HomePage/tools.jpg'
import musicImage from '../assets/Images/HomePage/music.jpg'

const navList = [{
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
  name: `Music`,
  anchors: `music`,
}]

const fullpageList = [{
  id: 0,
  text: 'C / C++',
  anchors: `cpp`,
  image: CppImage,
  child: <MainList />,
}, {
  id: 1,
  text: 'Unreal Engine',
  anchors: `ue`,
  image: UeImage,
  child: <UEMainList />,
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
  child: <ToolsMainList />,
}, {
  id: 6,
  text: 'Music',
  anchors: `nusic`,
  image: musicImage,
}]

export {
  navList,
  fullpageList
}
