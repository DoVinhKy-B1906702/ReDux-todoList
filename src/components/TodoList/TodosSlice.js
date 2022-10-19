// const initState =  [
//         {id: 1, name: 'learn C++', completed: false, priority: 'Medium'},
//         {id: 2, name: 'learn HTML', completed: true, priority: 'High'},
//         {id: 3, name: 'learn Java', completed: true, priority: 'Low'},
// ];


// const TodoListReducer = (state = initState, action) => {

//     console.log({state, action})

//     switch (action.type) {
//         case 'todoList/addTodo':
//             return  [
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => 
//                 todo.id === action.payload 
//                 ? 
//                     {...todo, completed: !todo.completed}
//                 : 
//                     todo 
//                 )
       
//         default:
//             return state;
//     }
// }

// export default TodoListReducer;



import { createSlice} from '@reduxjs/toolkit';

export default  createSlice({
    name: 'todoList',
    initialState: [
        {id: 1, name: 'learn C++', completed: false, priority: 'Medium'},
        {id: 2, name: 'learn HTML', completed: true, priority: 'High'},
        {id: 3, name: 'learn Java', completed: true, priority: 'Low'},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo =  state.find( todo => todo.id === action.payload);
            if ( currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
            
        }

    }
})