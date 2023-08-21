import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 250.11,
      date: new Date(2023, 5, 11),
    },
    {
      id: "e2",
      title: "Food",
      amount: 290.11,
      date: new Date(2023, 6, 11),
    },
    {
      id: "e3",
      title: "Electric Bill",
      amount: 230.11,
      date: new Date(2023, 7, 11),
    },
    {
      id: "e4",
      title: "Gasoline",
      amount: 210.11,
      date: new Date(2023, 8, 11),
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default App;
