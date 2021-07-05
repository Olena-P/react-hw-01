import PropTypes from "prop-types";
import style from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={style.transaction}>
            <thead>
                <tr >
                    <th className={style.head}>Type</th>
                    <th className={style.head}>Amount</th>
                    <th className={style.head}>Currency</th>
                </tr>
            </thead>

            <tbody >
                {items.map((transaction)=> (
                    <tr className={style.item} key={transaction.id}>
                        <td className={style.data}>{transaction.type}</td>
                        <td className={style.data}>{transaction.amount}</td>
                        <td className={style.data}>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,

        })
    )
}

export default TransactionHistory;