import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx';
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';
import UserGreeting from './UserGreeting/UserGreeting.jsx';


function App() {
  return(
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="GOAT"/>
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
