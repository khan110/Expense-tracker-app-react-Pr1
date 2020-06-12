import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/IncExp";
import { TransactionList } from "./components/Transactionlist";
import { AddTransaction } from "./components/AddTrans";
import { Cda } from "./components/Date";
import "./App.css";

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div>
      <Header></Header>
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      <Cda></Cda>
    </div>
    </GlobalProvider>
  );
}

export default App;
