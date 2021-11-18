import { max } from 'moment';
import React from 'react';


const Pagination = ({ storiesPerPage, totalStories, currentPage, paginate }) => {
    const pageNumbers = [];
    const totalPage = Math.ceil(totalStories / storiesPerPage)
    let left = Math.min(10, totalPage);
    const half = Math.floor(left / 2);
    let maxL = 0;
    let minR = totalPage;
    let ansMin = totalPage;
    let ansMax = totalPage;
    for (let i = currentPage; i > (Math.max(0, currentPage - half)); i--) {
        left--;
        maxL = i;
        ansMin = i;
    }
    for (let i = currentPage + 1; i <= (Math.min(totalPage, currentPage + half)); i++) {
        left--;
        minR = i;
        ansMax = i;
    }
    maxL--;
    while (left > 0 && maxL > 0) {
        left--;
        ansMin = maxL;
        maxL--;
    }
    minR++;
    while (left > 0 && minR <= totalPage) {
        left--;
        ansMax = minR;
        minR++
    }
    for (let i = ansMin; i <= ansMax; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;