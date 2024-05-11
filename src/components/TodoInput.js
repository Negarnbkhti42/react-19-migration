import React, { useState } from "react";

function TodoInput ({onSubmit}) {
    const [value, setValue] = useState('');

    const handleSubmit = () =>{
        onSubmit(value);
        setValue('');
    }

    return <div>
        <input value={value} onChange={(e) => {setValue(e.target.value)}} />
        <button onClick={handleSubmit}>submit</button>
    </div>
}

export default TodoInput;