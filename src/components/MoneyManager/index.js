import { Component } from "react"
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import {v4 as uuidv4} from 'uuid'

import './index.css'


const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]
  
  class MoneyManager extends Component{

    state={name:'',rupees:'',isSelected:transactionTypeOptions[0].optionId,moneyHistory:[],balance:0,income:0,expenses:0}
   
    onSelected=(event)=>{
       const{isSelected}=this.state
       this.setState({isSelected:event.target.value})
    }
    onTitle=(event)=>{
        const{name}=this.state
        this.setState({name:event.target.value})
    }
    onAmount=(event)=>{
        const{rupees}=this.state
        this.setState({rupees:event.target.value})

    }
    onClickedOnAdd=(event)=>{
        event.preventDefault()
       const{name,rupees,isSelected,moneyHistory,balance,income,expenses}=this.state
       let newHistory={
        id:uuidv4(),
        name,
        rupees,
        isSelected
       }

       this.setState(prevState=>({ moneyHistory:[...prevState.moneyHistory,newHistory],
        name:'',
        rupees:''
       }))

       if(isSelected===transactionTypeOptions[0].optionId){
        this.setState(prevState=>({balance:prevState.balance+parseInt(rupees)}))
        this.setState(prevState=>({income:prevState.income+parseInt(rupees)}))
       }
       if(isSelected===transactionTypeOptions[1].optionId){
        this.setState(prevState=>({expenses:prevState.expenses+parseInt(rupees)}))
        this.setState(prevState=>({balance:prevState.balance-parseInt(rupees)}))
       }
    }

    onDeletedItem=(id)=>{
     const{name,rupees,isSelected,moneyHistory,balance,income,expenses}=this.state
     const updateDelete=moneyHistory.filter(each=>each.id!==id)
    this.setState({moneyHistory:updateDelete})
    const transactionToDelete=moneyHistory.find(each=>each.id===id)
      console.log(transactionToDelete.isSelected)
      if(transactionToDelete.isSelected===transactionTypeOptions[0].optionId){
        this.setState(prevState=>({balance:prevState.balance-parseInt(transactionToDelete.rupees)}))
        this.setState(prevState=>({income:prevState.income-parseInt(transactionToDelete.rupees)}))
       }
       if(transactionToDelete.isSelected===transactionTypeOptions[1].optionId){
        this.setState(prevState=>({expenses:prevState.expenses-parseInt(transactionToDelete.rupees)}))
        this.setState(prevState=>({balance:prevState.balance+parseInt(transactionToDelete.rupees)}))
       }
   
    }

    render(){
        const{name,rupees,isSelected,moneyHistory,balance,income,expenses}=this.state
        
       
       return(
        <div className="bg-con">
            <div className="card-container">
               <div className="top-con">
                   <h1 className="name">Hi, Richard</h1>
                   <p className="description">Welcome back to your <span>Money Manager</span></p>
               </div>
               <ul className="money-details-con">
                <MoneyDetails balance={balance} income={income} expenses={expenses}/>
               </ul>
               <div className="below-con">
               <div className="transaction-section">
                    <h1 className="title">Add Transaction</h1>
                    <form onSubmit={this.onClickedOnAdd}>
                            <p className="above-input">TITLE</p>
                            <input value={name} onChange={this.onTitle} type="search" placeholder="TITLE" className="search"/><br/>
                            <p className="above-input">AMOUNT</p>
                            <input value={rupees} onChange={this.onAmount} type="numbers" placeholder="AMOUNT" className="search"/><br/>
                            <p className="above-input">TYPE</p>
                            <select className="select" value={isSelected} onChange={this.onSelected}>
                                {transactionTypeOptions.map(each=>(
                                    <option value={each.optionId} key={each.optionId}>{each.displayText}</option>
                                )
                                
                                )}
                            </select><br/>
                            <button className="button" type="submit">Add</button>

                    </form>
                    


               </div>
               <div className="history-section">
                <h1 className="history">History</h1>
                <div className="history-line-con">
                    <div className="history-con">
                        <p className="text-history">Title</p>
                        <p className="text-history">Amount</p>
                        <p className="text-history">Type</p>
                        <p></p>
                        
                    </div>
                    <ul className="add-btn-items">
                    {moneyHistory.map((eachItem)=>
                             <TransactionItem onDeletedItem={this.onDeletedItem} eachItem={eachItem} key={eachItem.id}/>)}

                       
                    </ul>

                </div>
               

               </div>

               </div>
               

            </div>
        </div>
       )
        
    }
  }

  export default MoneyManager
  