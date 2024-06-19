import Accordian from './components/accordian/acc';
import RandomColor from './components/random-color/color';
import StarRating from './components/star-rating/star';
import ImageSlider from './components/imageSlider/slider';
import LoadMoreData from './components/load-more-data/load';
import TreeNavMenu from './components/TreeViewNavMenu/NavMenu';
import menus from './components/TreeViewNavMenu/menuData';
import QRCodeGen from './components/QR-Code-Generator/code';
import LightDarkMode from './components/ThemeSwitcher/mode';
import ScrollBarIndicator from './components/Scroll-Bar-Indicator/scroll';
import Counter from './concept/code/Counter(Hooks)/TheNeedOfHooks';
import UseState from './concept/code/Hook/Built-In-Hook/1-useState';
import TabTest from './components/CustomTabs/tabTest';
import PopupTest from './components/popupModal/popupTest';

function App() {
  return (
    <div className="App">

      {/*component of accordian*/}
      {/* <Accordian /> */}

      {/*component of random color*/}
      {/* <RandomColor /> */}

      {/*component of star rating*/}
      {/* <StarRating /> */}

      {/*component of Image Slider*/}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={2} limit={10} /> */}

      {/*component of loading products*/}
      {/* <LoadMoreData /> */}

      {/*Navigation Menu component*/}
      {/* <TreeNavMenu Menus={menus} /> */}

      {/*QR generator*/}
      {/* <QRCodeGen /> */}

      {/*Light Dark Theme */}
      {/* <LightDarkMode/> */}

      {/*Scroll bar*/}
      {/* <ScrollBarIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* <Counter /> */}
      {/* <UseState /> */}

      {/*Custom Tabs Component*/}
      <TabTest />

      {/*Custom PopUp Modal*/}
      <PopupTest />

    </div>
  );
}

export default App;
