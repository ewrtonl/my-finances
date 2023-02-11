import React, { useState } from "react";
import { Container } from "./styles";
import { Grid } from "../Grid";

export function Form({ handleAdd, transactionsList, setTransactionsList }) { 

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <Container>
        <div className="input-content">
          <label htmlFor="desc">Descrição</label>
          <input id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </div>

        <div className="input-content">
          <label htmlFor="value">Valor</label>
          <input id="value" value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <div className="input-content">
          <div className="radio-group">
            <input  type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}/>
            <label htmlFor="rIncome">Entrada</label>

            <input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)}/>
            <label htmlFor="rExpenses">Saída</label>
          </div>
        </div>

        <button onClick={handleSave}>Adicionar</button>
      </Container>

      <Grid  itens={transactionsList} setItens={setTransactionsList}/>
    </>

  )
}