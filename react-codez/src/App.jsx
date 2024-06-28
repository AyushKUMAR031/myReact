import Counter from './concept/code/Counter(Hooks)/TheNeedOfHooks';
import UseState from './concept/code/Hook/Built-In-Hook/1-useState';
import FlagGlobalState from './components/FeatureFlag/context/context';
import FeatureFlags from './components/FeatureFlag';
import UseFetchHookTest from './concept/code/Hook/Custom-Hook/useFetch/test';

function App() {
  return (
    <div className="App">

      {/* <Counter /> */}

      {/* <UseState /> */}

      {/*Special Flags*/}
      {/* <FlagGlobalState> <FeatureFlags /> </FlagGlobalState> */}

      {/* useFetch -> Custom Hook*/}
      < UseFetchHookTest />


    </div>
  );
}

export default App;
