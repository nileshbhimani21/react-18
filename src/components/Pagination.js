import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Pagination({ currentPage, totalPages, maxVisibleButtons, onPageChanged }) {
  function isInFirstPage() {
    return currentPage === 1
  }
  function isInLastPage() {
    if (totalPages === 0) {
      return true
    }
    return currentPage === totalPages
  }
  function startPage() {
    // When on the first page
    if (currentPage === 1) {
      return 1
    }
    // When on the last page
    if (totalPages < maxVisibleButtons) {
      return 1
    }
    if (currentPage === totalPages) {
      return totalPages - maxVisibleButtons + 1
    }
    // When in between
    return currentPage - 1
  }
  function endPage() {
    if (totalPages === 0) {
      return 1
    }
    if (totalPages < maxVisibleButtons) {
      return totalPages
    }
    return Math.min(startPage() + maxVisibleButtons - 1, totalPages)
  }

  const onClickFirstPage = () => {
    if (isInFirstPage()) {
      return false
    }
    onPageChanged(1)
  }
  const onClickPreviousPage = () => {
    if (isInFirstPage()) {
      return false
    }
    onPageChanged(currentPage - 1)
  }
  const onClickPage = (page) => {
    onPageChanged(page)
  }
  const onClickNextPage = () => {
    if (isInLastPage()) {
      return false
    }
    onPageChanged(currentPage + 1)
  }
  const onClickLastPage = () => {
    if (isInLastPage()) {
      return false
    }
    onPageChanged(totalPages)
  }
  function isPageActive(page) {
    return currentPage === page
  }
  let pages = []
  for (let i = startPage(); i <= endPage(); i++) {
    pages.push(
      <li key={i} className="pagination-item">
        <button onClick={() => onClickPage(i)} className={isPageActive(i) ? 'active' : ''}>{i}</button>
      </li>
    )
  }
  return (
    <ul className="pagination">
      {!isInFirstPage() && <> <li className="pagination-item">
        <button onClick={() => onClickFirstPage()} className={isInFirstPage() ? 'disabled' : ''} disabled={isInFirstPage()}><ChevronDoubleLeftIcon  className='w-4 h-4'/></button>
      </li>
        <li className="pagination-item">
          <button onClick={() => onClickPreviousPage()} className={isInFirstPage() ? 'disabled' : ''} disabled={isInFirstPage()}><ChevronLeftIcon  className='w-4 h-4'/></button>
        </li></>}
      {pages}
      {!isInLastPage() && <> <li className="pagination-item">
        <button onClick={() => onClickNextPage()} className={isInLastPage() ? 'disabled' : ''} disabled={isInLastPage()}><ChevronRightIcon  className='w-4 h-4'/></button>
      </li>
      <li className="pagination-item">
        <button onClick={() => onClickLastPage()} className={isInLastPage() ? 'disabled' : ''} disabled={isInLastPage()}><ChevronDoubleRightIcon className='w-4 h-4'/></button>
      </li></>}
    </ul>)
}