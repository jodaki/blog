import { addDoc, collection } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { db , auth} from '../firebase/firebaseConfig'

export default function GreatePage({IsAute}) {
  //state
  const [title, settitle] = useState('')
  const [text, settext] = useState('')

  const Navigate = useNavigate()
  const GreateCollection = collection(db, 'posts')

    const GreatePost = async() => {
      await addDoc(GreateCollection, {
        title,
        text,
        acher: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
        }).then(() => {
          alert('پست شما با موفقیت انتشار پیدا کرد')
          }).catch((err) => {
          alert('مشکلی پیش آمده!!!!')
        });
        Navigate('/')
      }
    useEffect(() => {
      if(!IsAute){
        Navigate('/login')
      }
    }, []);


  return (
    <div>
      <h1 className='border-bottom pb-2'> GreatePost</h1>
      <div>
        <div class="mb-3 border p-4 mt-4">
          <h2 className='display-6 text-center'> Greate New Post</h2>
          <br/>
          <label class="form-label ">Title:</label>
          <input type="text" className='form-control' onChange={(e)=>{
            settitle(e.target.value)
            }}
            />
          <label class="form-label ">Text</label>
            <textarea className='form-control' rows='6' onChange={(e)=>{
              settext(e.target.value)
            }} />
           <div className='d-grid gap-2'>
             <button className='btn btn-primary mt-4' onClick={GreatePost}>Post</button>
           </div>
        </div>
      </div>
    </div>
  )
}
