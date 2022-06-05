import './App.css';
import DemoForm from './components/DemoForm';
import ListPost from './components/ListPost';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      {/* <ListPost /> */}
      <DemoForm />
    </div>
  );
}

export default App;
