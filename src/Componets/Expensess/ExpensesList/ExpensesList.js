import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./ExpensesList.css";

// tại đây là một component riêng nên có thể sử dụng adding conditional return statemen
// do nó return mà k bị thay đổi nghĩa lúc ở component chung cũng như khó làm vậy do bên kia còn nhiều thứ khác
function ExpensesList(props) {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">NO EXPENSE FOUND</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((expense, id) => (
        <ExpenseItems
          key={id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItems>
      ))}
    </ul>
  );
}

export default ExpensesList;
