import Counter from './concept/code/Counter(Hooks)/TheNeedOfHooks';
import UseState from './concept/code/Hook/Built-In-Hook/1-useState';
import FlagGlobalState from './components/FeatureFlag/context/context';
import FeatureFlags from './components/FeatureFlag';

function App() {
  return (
    <div className="App">

      {/* <Counter /> */}

      {/* <UseState /> */}

      {/*Special Flags*/}
      <FlagGlobalState> <FeatureFlags /> </FlagGlobalState>

    </div>
  );
}

export default App;
