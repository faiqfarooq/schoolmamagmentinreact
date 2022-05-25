import React from 'react';
import Navbaradmin from '../Navbaradmin';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Portal/Portal.css';
const StudentReg = (props) => {
    return ( 
<div>
    <Navbaradmin/>
<div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    
      <table className=" table">
        <thead>
          <tr>
            <li>
            <th className='numbershow' >#</th>
            <th className='nameshow' >Name</th>
            <th className='fathershow' >Father Name</th>
            <th className='stdcincshow'>CINC</th>
            <th className='rollnumbershow'>Roll Number</th>
            <th className='moreshow'>More</th>
            
            </li>
          </tr>
          </thead>
        
        </table>
     
        <table className=" table">
        <thead>
        <tr>{props.hero.map((info,i)=>(
             <li >
              <th  className='numbershow' key={i} >{i} </th>
               <th className='nameshow'  key={i} > {info.fullname}</th>
               <th className='fathershow' key={i}>  {info.fathername}  </th>
               <th className='stdcincshow' key={i}>  {info.cincstudent}</th>
               <th className='rollnumbershow'  key={i}>  {info.password}</th>
               <th  className='moreshow' key={i}>   
               
               <Popup trigger={<button className='main-btn'> More</button>} position="right center">
    <div>
      <ul>
        <li className='rollnumbershow'  key={i}> Father CINC:  {info.cincfather} </li>
        <li className='rollnumbershow'  key={i}> Metric:  {info.metricomaks}/ {info.metricfullmarks}</li>
        <li className='rollnumbershow'  key={i}> Intermediate:  {info.interomarks}/{info.interfullmarks} </li>
        <li className='rollnumbershow'  key={i}> Email:  {info.email} </li>
        <li className='rollnumbershow'  key={i}> Password:  {info.password} </li>
        <li className='rollnumbershow'  key={i}> Country:  {info.country} </li>
        <li className='rollnumbershow'  key={i}> State:  {info.state} </li>
        <li className='rollnumbershow'  key={i}> City:  {info.city} </li>
        <li className='rollnumbershow'  key={i}> Postal Code:  {info.zip} </li>
        <li className='rollnumbershow'  key={i}> Mailing Address:  {info.maddress} </li>
        <li className='rollnumbershow'  key={i}> Permanent Address:  {info.paddress} </li>



      </ul>
    
      </div>
  </Popup></th>
               
                                         
                </li> 
            
          

             
             
              
            ))}   </tr> 


 </thead>
        
        </table>

       
            {/* <tr>{props.hero.map((info,i)=>(
              <><th>   {i}  </th><th>   {info.firstname}   </th><th>   {info.lastname} </th><th>  {info.email} </th><th>   {info.password} </th> <th>   {info.paddress} </th> <th>   {info.maddress} </th> <th>   {info.country} </th><th>   {info.state} </th><th>   {info.city} </th><th>   {info.zip} </th></>

             
             
              
            ))}</tr> */}
       
          {/* <tr>
            <th scope="row">{props.hero.index}</th>
            <td>{props.hero[0].name}</td>
            <td>{props.hero[0].email}</td>
            <td>{props.hero[0].country}</td>
            <td>{props.hero[0].gender}</td>
            <td>{props.hero[0].userstatus}</td>
            <td>{props.hero[0].password}</td>
            <td>{props.hero[0].picture}</td>
            <td>{props.hero[0].newcom}</td>
          </tr>
           */}
      
                </div>
                <div className='col-2'></div>
            </div>
</div>
     );
}
 
export default StudentReg;