import { BaseCard } from "../baseCard";

interface BaseTableProps {
    rows: TableRowsProps[];
    headers: string[];
    title?: string;
}
interface TableRowsProps {
    id: string;
    action?: boolean;
    list: string[];
}
const BaseTable = (props: BaseTableProps) => {
    return <div >
    <BaseCard
        hideIcon
    >
        <div className="p-2" >
            <div className="relative overflow-x-auto">
                {props.title && <div className="text-[24px] text-black ps-5 font-bold">{props.title}</div>}
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase ">
                        <tr>
                            {props.headers.map((header, i) => <th key={i} scope="col" className="px-6 py-3 text-[13px] font-semibold">
                                {header}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.rows.map((row, i) => <tr key={i} className="bg-white border-b ">
                            {row.list.filter((a, i) => i < props.headers.length).map((item, o) => <th key={o} scope="row" className="px-6 py-4 font-medium text-[#484848] whitespace-nowrap border-gray-700 text-[13px]">
                                {item}
                            </th>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    </BaseCard>
    <div 
    className="grid grid-cols-2 text-black my-3"
    >
        <div >
        49,590 total entries
        </div>
        <div className="flex justify-end items-center">
        Records per page
        </div>
    </div>
    </div>
}
export default BaseTable;