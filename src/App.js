import React,  {useState}from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {Home, Login, GreatePage} from './Pages/indexPages'
import {signOut} from 'firebase/auth'
import {auth} from './firebase/firebaseConfig' 
import ConectUs from './Pages/ConectUs';
import MyMessage from './Pages/MyMessage';


function App() {


  //loclas storeg
  const [IsAute, setIsAute] = useState(localStorage.getItem('isAute'));
  //exite google accont 
  const exitGoogleAcounite = () =>{
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAute(false)


      alert('شما با موفقیت خارج شدید ')
    }).catch(() => {
      alert('مشکلی پیش امده  ')
    });
  }
    //set time for aouto exite//

    // setTimeout(() => {
    //     if (IsAute) {
    //       signOut(auth).then(() => {
    //         localStorage.clear()
    //         setIsAute(false)
    //         Navigate('/')
    //       })
    //     }
    // }, 100000);
  
  
  return (
    <div className='container'>
        <ul>
          <Link to='/'>
            <li>home</li>
          </Link>
          {!IsAute ? <Link to='/login'><li>login</li></Link> : <button onClick={exitGoogleAcounite} >exite</button> }
          {IsAute &&  <Link to='/GreatePage'><li>GreatePost</li></Link>}
          <Link to='/conectus'>
            <li>conectus</li>
          </Link>
          <Link to='/mymessage'>
            <li>mymessage</li>
          </Link>
        </ul>
      
      <Routes>
        <Route  path="/" element={<Home IsAute={IsAute} />}/>
        <Route exact path="/login" element={<Login setIsAuth={setIsAute}/>}/>
        <Route exact path='/greatepage' element={<GreatePage IsAute={IsAute}/>} />
        <Route exact path='/ConectUs' element={<ConectUs/>} />
        <Route exact path='/mymessage' element={<MyMessage/>} />
  
        
        </Routes>
    </div>
  );
}

export default App;
