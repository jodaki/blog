import React, {useEffect, useState} from 'react'
import { async } from '@firebase/util'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '../firebase/firebaseConfig'
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';


export default function Home({IsAuth}) {
  const [postlist, setpostlist] = useState([]);
  const GreateCollection = collection(db, 'posts')


    
 
    useEffect(() => {
    const getPosts = async () => {
        const data = await getDocs(GreateCollection)
        setpostlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
      getPosts()
    }, [])


    const deletePost = async (id) => {
      const postDoc = doc(db, 'posts', id)
      await  deleteDoc(postDoc).then(() => {
        alert('دهن پست برای همیشه سروریس شد ')
        renderIntoDocument()
      })
    }
    
  return (
    <div>
        <h1 className='border-bottom pb-2' >Home</h1>
        {
          postlist.map((post) => {
            return <div className='container'>
              <div class="card m-2">
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    {!IsAuth && post.acher.id === auth.currentUser.uid &&  (
                      
                      <button 
                        className='btn btn-sm float-end btn-light' 
                        onClick={() =>{(deletePost(post.id))}}>
                        Dellet
                      </button>)
                      
                    }
                    <p>{post.title}</p>
                    <footer class="blockquote-footer">{post.text}<cite title="Source Title">Source Title</cite>
                    <div class="card-footer">
                      <small class="fst-italic"><span className='text-bold'>Great post: </span>{post.acher.name}</small>
                    </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          })
        }
    </div>
  )
}
