import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

// import UseStateTutorial from "./Components/useStateTutorial";
// import UseReducerTutorial from "./Components/useReducerTutorial";
// import UseEffectTutorial from "./Components/useEffectTutorial";
// import UseRefTutorial from "./Components/useRefTutorial";
// import UseContextTutorial from "./Components/UseContext/UseContextTutorial";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>

    // <UseStateTutorial/>
    // <UseReducerTutorial/>
    // <UseEffectTutorial/>
    // <UseRefTutorial/>
    // <UseContextTutorial/>
  )
}

export default App;
