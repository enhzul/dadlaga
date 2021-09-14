import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   
    <div className="container">
      <div className="header">
        <div className="header">
          <div className="row">
            <div className="col-md-12">
              INFOSYSTEM
            </div>
          </div>
        </div>
      </div>

      <Router>
        <div className="title">
            
            
            <div className="row">
            <div className="col-md-2">
              <Link to="/">Нүүр</Link>
            </div>
            <div className="col-md-2">
               
              <Link to="/product">Бүтээгдэхүүн</Link>
            </div>
  
            <div className="col-md-2">
             
              <Link to="/product">  Бидний тухай </Link>
            </div>
  
            <div className="col-md-2">
              <Link to="/product">      Холбоо барих </Link>
            </div>
          
            <div className="col-md-2">
            <Link to="/product">    Программ татах </Link>
            </div>
            <div className="col-md-2">
              
              <Link to="/product">  Зөвлөгөө </Link>
            </div>
  
            </div>
  
        </div>
      </Router>
     

      <Router>
      <div className="title1">
        <div className="row">
          <div className="col-md-6">
        
          <div className="col-md-6"></div>
         
          <Link to="/product"> MACS санхүүгийн бүртгэлийн иж бүрэн програм</Link>
          </div>
          <div className="col-md-6">
       <Link to="/product"> 
          PACS төслийн санхүүгийн программ</Link>
          </div>
          </div>
      </div>
      




      <div className="row">
        <div className="col-md-6">
          <div className="imageParent">
            <img className="image image2" src="/zurag1.jpg" />
          </div>
        </div>
        <div className="col-md-6">
        <div className="imageParent">
            <img className="image image3" src="/zurag2.jpg" />
          </div>
        </div>
      </div> 

      <div className="title1">
        <div className="row">
          <div className="col-md-4">
        
          
          <div className="col-md-4"></div>
         <Link to="/product">         Авто засварын газрын бүртгэл, удирдлагын систем </Link>
          </div>
          <div className="col-md-4">
       
            <Link to="/product"> “COST”- Бүтээгдэхүүний өртөг тооцооллын систем</Link>
          </div>
          <div className="col-md-4">
             <Link to="/product">     Эмийн санд зориулсан POS систем </Link>
          </div>
          </div>
      </div>

         </Router>

     


      <div className="row">
        <div className="col-md-4">
          <div className="imageParent">
            <img className="image" src="/zurag3.jpg" />
          </div>
        </div>
        <div className="col-md-4">
        <div className="imageParent">
            <img className="image" src="/zurag4.jpg" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="imageParent">
            <img className="image" src="/pos.png" />
          </div>
          </div>
      </div>
      
    </div> 
    
    
  

  );
}

export default App;
