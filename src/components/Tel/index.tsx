import * as React from "react";

interface TelProps {
    code: string,
    telNumber: string
}

const Tel : React.FunctionComponent<TelProps> = ({ code, telNumber, children }) => (
    <a href={`tel:+${code} ${telNumber}`}>
        <i className="fas fa-phone-alt"/>&nbsp;{children}
    </a>
)

export default Tel;