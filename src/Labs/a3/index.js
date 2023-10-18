import JavaScript from "./JavaScript";
import Classes from "./Classes";
import PathParameters from "./PathParameters";
import Styles from "./Styles/Styles";
import ConditionalOutput from "./ConditionalOutput/index.js";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
function Assignment3(){
    return(
        <div className="container">
            <h1>Assignment3</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
            
        </div>
    );
}
export default Assignment3;