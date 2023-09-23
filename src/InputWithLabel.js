import React, {useEffect, useRef} from "react";
import styles from './InputWithLabel.module.css';

const InputWithLabel = ({title, handleTitle}) => {

    const inputRef = useRef(null);

    useEffect(() => {
            inputRef.current.focus();
    });


    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value
        handleTitle(newTodoTitle)
    }

    return (
        <div className={styles.mainInput}>
            {/*<label htmlFor="todoTitle">{children}</label>*/}
            <input name="title" type="text" id="todoTitle"
                   value={title}
                   ref={inputRef}
                   placeholder={"Add New Todo"}
                   onChange={handleTitleChange}/>
            <button className={styles.addButton} type="submit">Add Todo</button>
        </div>
    )
}

export default InputWithLabel