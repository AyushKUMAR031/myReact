import { Routes, Route } from 'react-router-dom';

import Counter from './concept/code/Counter(Hooks)/TheNeedOfHooks';
import UseState from './concept/code/Hook/Built-In-Hook/1-useState';
import FlagGlobalState from './components/FeatureFlag/context/context';
import FeatureFlags from './components/FeatureFlag';
import UseFetchHookTest from './concept/code/Hook/Custom-Hook/useFetch/test';
import UseOutsideClickTest from './concept/code/Hook/Custom-Hook/useOutsideClick/test';
import UseResponsiveTest from './concept/code/Hook/Custom-Hook/useResponsive/test';
import Weather from './LevelUp/WeatherApp/weather/weatther';

function App() {
  return (
    <div>

      {/*Custom Hooks*/}

      {/* <Counter /> */}
      {/* <UseState /> */}
      {/* < UseFetchHookTest /> */}
      {/* < UseOutsideClickTest /> */}
      {/* <UseResponsiveTest /> */}

      {/*Special Flags*/}
      {/* <FlagGlobalState> <FeatureFlags /> </FlagGlobalState> */}


      {/*Weather App*/}
      {/* <Weather /> */}
    </div>
  );
}

export default App;
