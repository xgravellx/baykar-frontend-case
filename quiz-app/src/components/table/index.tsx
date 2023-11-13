import { FC, ReactNode } from "react";

export interface IDataItem {
    [key: string]: any;
}

export interface ITableColumns {
    title: string;
    key: string;
    textPosition?: string;
    textColor: string;
    render?: (item: IDataItem) => ReactNode;
}

export interface ITable {
    dataSource: IDataItem[];
    columns: ITableColumns[];
}


const Table: FC<ITable> = ({dataSource, columns}: ITable) => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
            <tr>
                {
                    columns.map((column: ITableColumns) => (
                        <th
                            key={`TH_${column.key}`}
                            className="p-3 font-bold uppercase bg-indigo-950 text-indigo-200
                            border border-indigo-900 hidden lg:table-cell"
                        >
                            {column.title}
                        </th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {dataSource.map((dataItem: IDataItem, dataIndex: number) => (
                <tr key={dataIndex}>
                    {columns.map((column: ITableColumns) => {
                        return (
                            <td
                                key={`${dataIndex}_${column.key}`}
                                className={`${column.textPosition} ${column.textColor} w-full lg:w-auto p-3 border border-indigo-900 block lg:table-cell relative lg:static`}
                            >
                                {column.render?.(dataItem) ?? dataItem[column.key]}
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
