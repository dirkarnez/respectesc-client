import * as React from "react";

interface TelProps {
    code: string,
    telNumber: string
}

export default ({ code, telNumber }: TelProps) => <a style={{color: "#007bff"}} href={`tel:+${code} ${telNumber}`}>+{code} {telNumber}</a>