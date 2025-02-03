import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx';
import Card from './Components/Card/Card.jsx';
import Button from './Components/Button/Button.jsx';
import Student from './Components/Student/Student.jsx';
import UserGreeting from './Components/UserGreeting/UserGreeting.jsx';
import List from './Components/List/List.jsx';


function App() {

  const fruits = [
      {id: 1, name: "apple", calories: 95},
      {id: 2, name: "orange", calories: 45},
      {id: 3, name: "banana", calories: 105},
      {id: 4, name: "coconut", calories: 159},
      {id: 5, name: "pineapple", calories: 37}
  ];

  const vegetables = [
    {id: 6, name: "potatoes", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 25},
    {id: 9, name: "corn", calories: 63},
    {id: 10, name: "broccoli", calories: 50}
];
  
  return(
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="GOAT" />
      <List type="food" category="Fruits" items={fruits} />
      <List type="food" category="Vegetables" items={vegetables} />
      <Card />
      <Student name="Sebastian Herrera" age={33} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Princesa" age={20} isStudent={true}/>
      <Student name="Rey" age={50} isStudent={false}/>
      <Student />
      <Button />
      <Footer />
    </>
  );
}

export default App
