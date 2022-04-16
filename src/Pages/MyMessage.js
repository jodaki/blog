import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebase/firebaseConfig'

import {useNavigate} from 'react-router-dom' 

export default function MyMessage({IsAute}) {


  const [formlist, setformlist] = useState([])

//conect to database 
  const GreateCollection = collection(db, 'formsContact')



  const adminId = 'mamad.joudaki@gmail.com'
  const Navigate = useNavigate()
  useEffect(() => {
  const getforms = async () => {
    //login if admin show page
    if (!IsAute || !auth.currentUser.email === adminId) {
      Navigate('/login')
    }
      


    //get to database and set database
      const data = await getDocs(GreateCollection)
      setformlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
    getforms()
  }, [])

  //delete form
  const deletform = async (id) => {
     const formDoc = doc(db, 'formsContact', id)
     await deleteDoc(formDoc).then(() => {
       alert('با موفقیت حذف شد ')
       window.location.reload()
     })
  }


  
  return (
    <div>
        <h1 className='border-bottom pb-2'>massages</h1>

      <table class="table table-hover">
            <thead>
              <tr class="table-light">
                <th scope="row">#</th>
                <td colspan="2" c>name</td>
                <td>email</td>
                <td>massage</td>
                </tr>
            </thead>
            <tbody>
              
          {
            formlist.map((list)=>{
              return <tr>
              <th scope="row">#</th>
              <td colspan="2"class="table-success" >{list.name}</td>
              <td>{list.email}</td>
              <td class="table-success">{list.massage}</td>

              <button className='btn btn-sm btn-outline-danger' 
                onClick={()=>(deletform(list.id))}> 
                -
              </button>

              </tr>
                  
            })
          }
        </tbody>
      </table>
          
          
        
    </div>
  )
}
