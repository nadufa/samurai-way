import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import cn from 'classnames'

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({
                              totalItemsCount,
                              pageSize,
                              currentPage,
                              onPageChanged,
                              portionSize = 10
                          }: PaginatorPropsType) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)

    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    console.log(portionNumber)
    console.log(portionCount)
    return (
        <div className={classes.paginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span
                            className={cn({[classes.selectedPage]: currentPage === p}, classes.pageNumber)}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}
                        >{p}</span>
                    )
                })
            }
            {
                portionNumber < portionCount &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
    );
}