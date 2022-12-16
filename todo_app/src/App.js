import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ChangeValueButton = styled.button`
  display: inline-block;
`;

const ButtonWrapper = styled.button`
  display: inline-block;
`;

function App() {
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton>
            <p>안녕</p>
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
