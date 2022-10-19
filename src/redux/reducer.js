import { combineReducers } from 'redux'

import filtersReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {} , action) => {
//         return {
//             filters: filtersReducer(state.filters, action),
//             todoList: TodoListReducer(state.todoList, action),
//         }
   
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: TodoListReducer,
})


export default rootReducer;