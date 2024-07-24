import './index.css'

const TransactionItem=(props)=>{
    const{eachItem,onDeletedItem}=props
    const{id,name,rupees,isSelected}=eachItem
    const onDelete=()=>{
        onDeletedItem(id)
    }

    return(
        <li className='list-con'>
            <p className='para'>{name}</p>
            <p  className='para'>{rupees}</p>
            <p  className='para'>{isSelected}</p>
            <img onClick={onDelete} src='https://assets.ccbp.in/frontend/react-js/money-manager/delete.png' className='del-img'/>


        </li>
    )


}

export default TransactionItem