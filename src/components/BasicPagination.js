import { useState, useEffect } from 'react';
import { ChevronDoubleRightIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'

export default function BasicPagination({ totalRecords, limit, batch, onBatchChange }) {
    console.log(totalRecords, limit, batch)
    const [startIndex, setStartIndex] = useState(1);
    const [endIndex, setEndIndex] = useState(limit);
    const [totalPages, setTotalPages] = useState(0)
    const [countArr, setCountArr] = useState([]);
    useEffect(() => {
        setTotalPages(
            (Math.floor(totalRecords / limit) + (totalRecords % limit > 0 ? 1 : 0))
        );
    }, [totalRecords, limit])

    useEffect(() => {
        if ((limit * limit) > totalRecords) {
            const arrLength = (Math.floor(totalRecords / limit) + (totalRecords % limit > 0 ? 1 : 0))
                setCountArr(Array.from({ length: arrLength }, (_, i) => i + 1));
            } else {
                setCountArr(Array.from({ length: limit }, (_, i) => i + 1));
        }
    }, [startIndex, limit, totalRecords]);

    useEffect(() => {
        setEndIndex(limit + startIndex - 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startIndex]);

    const onNextClick = () => {
        if (batch === totalPages) {
            return;
        }
        let nextIndex = batch + 1;
        if (nextIndex === endIndex && nextIndex < totalPages) {
            setStartIndex(startIndex + 1);
        }
        onBatchChange(nextIndex)
    }
    const onLastClick = () => {
        if (batch < totalPages) {
            if ((limit * limit) < totalRecords) {
                setStartIndex(totalPages - limit + 1);
            }
            onBatchChange(totalPages);
        }
    }

    const onPrevClick = () => {
        if (batch === 1) {
            return
        }
        let prevIndex = batch - 1;
        if (prevIndex === startIndex && prevIndex > 1) {
            setStartIndex(startIndex - 1)
        }
        onBatchChange(prevIndex);
    }

    const onFirstClick = () => {
        if (batch > 1) {
            setStartIndex(1);
            onBatchChange(1);
        }
    }

    const onNumberClick = (currentIndex) => {
        if (currentIndex === endIndex && currentIndex < totalPages) {
            setStartIndex(startIndex + 1);
        }
        if (currentIndex === startIndex && currentIndex > 1) {
            setStartIndex(startIndex - 1)
        }
        if (currentIndex !== batch) {
            onBatchChange(currentIndex);
        }
    }
    console.log(startIndex, endIndex, 'startIndex')
    return (<>
        {(totalPages > 1) &&
            <ul className="inline-flex -space-x-px">
                {batch !== 1 && <>
                    <li>
                        <button type="button" onClick={onFirstClick} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><ChevronDoubleLeftIcon className='w-[20px]' /></button>
                    </li>
                    <li>
                        <button type="button" onClick={onPrevClick} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><ChevronLeftIcon className='w-[20px]' /></button>
                    </li>
                </>}
                {startIndex > 1 &&
                    <li>
                        <button className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>...</button>
                    </li>
                }
                {countArr.map((count, index) => (
                    <li key={index}>
                        <button onClick={() => onNumberClick(count)} className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${batch === startIndex + index ? "!bg-primary text-gray-50" : ""}`}>{count}</button>
                    </li>

                ))}
                {endIndex < totalPages &&
                    <button className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>...</button>
                }
                {batch !== totalPages && <>
                    <li>
                        <button type="button" onClick={onNextClick} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><ChevronRightIcon className='w-[20px]' /></button>
                    </li>
                    <li>
                        <button type="button" onClick={onLastClick} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><ChevronDoubleRightIcon className='w-[20px]' /></button>
                    </li>
                </>}
            </ul>}
    </>);
}