// const initialState={
//     list: []
// };
// const ChangeTitle = (state=initialState , action) => {
//     switch(action.type){
//         case "TITLENAMEE" : 
//         const { id ,data,datedata} = action.payload;
//         return{
//            ...state,
//            list:[
//                ...state.list,
//                {
//                    id:id,
//                    data:data,
//                    datedata:datedata
//                }
//            ]
//         } 
 
//         case "DELETEE" : 
//         const newlist=state.list.filter((elem) => elem.id !== action.id) 
//         return{
//            ...state,
//            list:newlist
//         } 
       
//         default:return state;
//     }
// }
 
// export default ChangeTitle;