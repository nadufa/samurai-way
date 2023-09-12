import React from 'react';
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

export const Users = ({
                          currentPage,
                          onPageChanged,
                          totalUsersCount,
                          pageSize,
                          users,
                          ...props
                      }: UsersPropsType) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow} follow={props.follow} key={u.id}/>)
                }
            </div>
        </div>
    )

}