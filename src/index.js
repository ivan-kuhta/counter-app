import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const resDispatch = () => dispatch(res());

const {inc, dec, res} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const resDispatch = bindActionCreators(res, dispatch);


document.getElementById('inc').addEventListener('click', () => {
  inc();
})
document.getElementById('dec').addEventListener('click', () => {
  dec();
})
document.getElementById('reset').addEventListener('click', () => {
  res();
})

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
