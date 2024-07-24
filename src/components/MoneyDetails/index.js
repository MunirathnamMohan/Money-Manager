import './index.css'

const MoneyDetails=(props)=>{
    const{balance,income,expenses}=props
    return(
        <li className='list-con'>
            <div className='bg-balance bg-text'>
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className='img balance'/>
                   <div>
                      <p className='text'>Your Balance</p>
                      <p className='rupees'>Rs <span>{balance}</span></p>
                     </div>
            </div>
            <div className='bg-income bg-text'>
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png " alt="income" className='img'/>
                   <div>
                      <p className='text'>Your Income</p>
                      <p className='rupees'>Rs <span>{income}</span></p>
                     </div>
            </div>
            <div className='bg-expenses bg-text'>
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses" className='img'/>
                   <div>
                      <p className='text'>Your Expenses</p>
                      <p className='rupees'>Rs <span>{expenses}</span></p>
                     </div>
            </div>
           

        </li>
    )

}

export default MoneyDetails