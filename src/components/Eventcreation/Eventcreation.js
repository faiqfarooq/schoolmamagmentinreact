// import React, { useState } from 'react';
// import Navbaradmin from '../Navbaradmin';
// // import { datee,titlenamee,deletee } from '../../Actions/index';
// import { useSelector, useDispatch } from 'react-redux';
// const Eventcreation = () => {
//     const list = useSelector((state)=>state.ChangeTitle.list);
//     const dispatch = useDispatch();
//     // const [evntname,setEvntname]=useState("");
//     // const [evntdate,setEvntdate] = useState("");
        

//     //  let name,value;
//     //  const handleInputs=(e)=>{
//     //      name=e.target.name;
//     //      value=e.target.value;
//     //      setEvnt({...evnt,[name]:value})
//     //  }
//      const handleSubmit=(e)=>{
//          e.preventDefault();
//          alert('Event is added')
        
//      }
  
//     return ( 
//         <div>
            
//             <Navbaradmin/> 
            
//             <h1 className='py-3 text-center'>Add and Update Events</h1>
//             <div className='row'>
//                 <div className='col-2'></div>
//                 <div className='col-8'>
//                     <h2 className='text-center'>Enter the Event information</h2>
//                     <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                     <div className="row">
                   
//         <div className="col">
//         <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
//           <input type="text" className="form-control" value={evntname} onChange={(e)=>setEvntname(e.target.value)}  placeholder="Enter Title of event " aria-label="Full name" />
//           <div id="fullname help" className="form-text">We'll never share your name with anyone else.</div>
//         </div>
//         <div className="col">
//         <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
//           <input type="date" className="form-control" value={evntdate}  onChange={(e)=>setEvntdate(e.target.value)} placeholder="date " aria-label="Last name" />
//           <div id="student cinc help" className="form-text">We'll never share your CINC with anyone else.</div>
//         </div>
//       </div>
         
//         </div>
        
//         <button type="submit" className="btn btn-primary" onClick={()=>dispatch(titlenamee(evntname),datee(evntdate),setEvntname(''))} >Add</button>
//                     </form>
//                 </div>
//                 <div className='col-2'></div>
//             </div>


//             <div>
//             <h2 className='text-center'>Event Created</h2>
//               {
//                 list.map((elem)=>{
//                   return(

//                     <div className='row' key={elem.id}>
                    
//                   <div className='col-2'></div>
//                   <div className='col-6'>
    
//                     <h3>{elem.data} </h3>
//                     <h3>{elem.datedata}</h3>
                    
//                   </div>
//                   <div className='col-2'>
//                     <button onClick={()=>dispatch(deletee(elem.id),setEvntname(''))}>Delete</button>
//                   </div>
//                   <div className='col-2'></div>
//                 </div>
//                   )
                
//                 })
//               }
//             </div>
           


//              {/* <h1 className='py-5'>Hello</h1>
//              <div className='mx-5 py-5'>
//                  <button title='dec' onClick={()=>dispatch(titlenamee())}><span>-</span></button>
//                  <input type="text" value={mystate} onChange={handleInputs} />
//                  <button title='inc' onClick={()=>dispatch(datee())}><span>+</span></button>
//              </div> */}
//         </div>
//      );
// }
 
// export default Eventcreation;