import * as React from "react";

export const Table = ({className, ...rest}: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => (
    <table {...rest} className={`${className ? `${className} ` : ""}table r-table`}/>
)

export const Th = ({className, ...rest}: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>) => (
    <th {...rest} className={`${className ?  `${className} ` : ""}r-table-header`}/>
)

export const Td = ({className, ...rest}: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => (
    <td {...rest} className={`${className ?  `${className} ` : ""}r-table-data`}/>
)