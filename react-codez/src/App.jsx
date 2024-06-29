import Counter from './concept/code/Counter(Hooks)/TheNeedOfHooks';
import UseState from './concept/code/Hook/Built-In-Hook/1-useState';
import FlagGlobalState from './components/FeatureFlag/context/context';
import FeatureFlags from './components/FeatureFlag';
import UseFetchHookTest from './concept/code/Hook/Custom-Hook/useFetch/test';
import UseOutsideClickTest from './concept/code/Hook/Custom-Hook/useOutsideClick/test';
import UseResponsiveTest from './concept/code/Hook/Custom-Hook/useResponsive/test';
import TopDownScroll from './components/TopDownScroll';
import ParticularSectionScroll from './components/ParticularSectionScroll/Section';

function App() {
  return (
    <div className="App">

      {/* <Counter /> */}

      {/* <UseState /> */}

      {/*Special Flags*/}
      {/* <FlagGlobalState> <FeatureFlags /> </FlagGlobalState> */}

      {/* useFetch -> Custom Hook*/}
      {/* < UseFetchHookTest /> */}

      {/* useOutsideClick -> Custom Hook*/}
      {/* < UseOutsideClickTest /> */}

      {/*useResponsive -> Custom Window Resize hook*/}
      {/* <UseResponsiveTest /> */}

      {/*TopDownScroll Feature*/}
      {/* <TopDownScroll /> */}

      {/*Particular Section Scroll*/}
      <ParticularSectionScroll />

    </div>
  );
}

export default App;
