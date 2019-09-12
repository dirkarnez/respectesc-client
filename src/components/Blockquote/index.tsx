import * as React from "react";

interface BlockquoteProps {
    from: string
}

const Blockquote : React.FunctionComponent<BlockquoteProps> = ({ from, children }) => (
    <blockquote 
        data-aos="fade-right"
    >
        {children}
        <br/>
        <br/>
        <strong>- {from}</strong>
    </blockquote>
)

export default Blockquote;