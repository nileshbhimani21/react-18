import React from "react";
import ReactPaginate from "react-paginate";

const DataTable = ({ cols, data, total, dataFilter, handleSearch, onBatchChange }) => {
  return (<>
    {handleSearch && <div className="flex justify-end">
      <input type="text" placeholder="Search" name="search" value={dataFilter.searchText} onChange={handleSearch} />
    </div>}
    <div className="overflow-x-auto">
      <table className={`w-full border-separate border-spacing-y-2`}>
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index} className='py-2 px-3 text-left'>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? data?.map((item, index) => (
            <tr key={index}>
              {cols.map((col, key) => (
                <td key={key} className="py-2 px-3 text-left bg-white first:rounded-l last:rounded-r drop-shadow-sm"> {col.render(item)}</td>
              ))}
            </tr>
          )) : <tr>
            <td colSpan={cols?.length} className="py-2 px-3 text-center bg-white first:rounded-l last:rounded-r drop-shadow-sm"> Data not available !</td>
          </tr>}
        </tbody>
      </table>
    </div>
    <ReactPaginate
      nextLabel=">"
      onPageChange={onBatchChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={Math.ceil(total / dataFilter?.limit)}
      previousLabel="<"
      pageClassName="w-10 h-10 text-center leading-10 bg-white"
      // pageLinkClassName="page-link"
      previousClassName="w-10 h-10 text-center leading-10 bg-white rounded-l"
      // previousLinkClassName="page-link"
      nextClassName="w-10 h-10 text-center leading-10 bg-white rounded-r"
      // nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="w-10 h-10 text-center leading-10 bg-white"
      // breakLinkClassName="page-link"
      containerClassName="flex drop-shadow-sm divide-x divide-gray-300"
      activeClassName="!bg-primary text-white"
      renderOnZeroPageCount={null}
    />
  </>);
};

export default DataTable;