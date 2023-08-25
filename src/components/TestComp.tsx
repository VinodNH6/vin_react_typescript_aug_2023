import React from "react";

interface IProps {
    name: string
}

const TestComp : React.FC<IProps> = ({ name }) => {
    return (
        <div>
            <p> Hello world.  From {name}. </p>
        </div>
    )
}

export default TestComp