import React, {useEffect, useRef} from "react";

const InputWithLabel = ({title, handleTitle, children}) => {

    const inputRef = useRef(null);

    useEffect(() => {
            inputRef.current.focus();
    });


    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value
        handleTitle(newTodoTitle)
    }

    return (
        <>
            <label htmlFor="todoTitle">{children}: </label>
            <input name="title" type="text" id="todoTitle"
                   value={title}
                   ref={inputRef}
                   onChange={handleTitleChange}/>
            <button type="submit">Add</button>
        </>
    )
}

export default InputWithLabel