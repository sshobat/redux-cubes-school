import './App.css';
import Users from './components/Users'


import { connect } from 'react-redux';
import * as ActionTypes from './store/ActionTypes';
import { nameUpdate, waitAndUpdateAge } from './store/ActionCreators';

function App(props) {
  console.log(props.name);

  const changeName = () => {
    props.onNameUpdate('Mika');
  };

  const changeAge = () => {
    props.onAgeUpdate(props.age + 1);
  };

  const changeAgeName = () => {
    props.onAgeNameUpdate(props.age + 5, 'Žika')
  };

  return (
    <div className="App">
      {console.log(props)}
     <h1>Hello</h1>
     <button onClick={changeName}>Change name</button>
     <button onClick={changeAge}>Change age</button>
     <button onClick={changeAgeName}>Change age and name</button>
     <Users />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age, //ako nam treba
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNameUpdate: name => dispatch(nameUpdate(name)),
    onAgeUpdate: (age) => dispatch(waitAndUpdateAge(age)),
    onAgeNameUpdate: (age, name) => dispatch({
      type: ActionTypes.AGE_NAME_UPDATE,
      age: age,
      name: name,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
