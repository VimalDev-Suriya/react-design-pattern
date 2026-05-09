import { toggleReducer_v2 } from './reducers';
import Toggle from './Toggle';

const StateReducerContainer = () => {
  return (
    <div>
      <h4>State reducer</h4>
      <Toggle />
      <p>Button will not increase more than 3 clicks</p>
      <Toggle reducer={toggleReducer_v2} />
    </div>
  );
};

export default StateReducerContainer;
