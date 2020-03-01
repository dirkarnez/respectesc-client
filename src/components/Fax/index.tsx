import * as React from "react";

interface FaxProps {
    code: string,
    faxNumber: string
}

const Fax : React.FunctionComponent<FaxProps> = ({ code, faxNumber, children }) => (
    <a href={`tel:+${code} ${faxNumber}`}>
        <i className="fas fa-fax"/>&nbsp;{children}
    </a>
)

export default Fax;