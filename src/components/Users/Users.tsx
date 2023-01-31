import React from 'react';
import classes from './Users.module.css'
import {UsersPageType} from "../../redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";

// type UsersPropsType = {
//     users: UsersPageType
//     setUsers: (users: UsersType[]) => UsersType[]
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
// }

const Users = (props: UsersPropsType) => {

    if (props.users.length == 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/736x/61/77/f7/6177f7a61cccf7a5fa5429af4fb1b2a0.jpg',
                followed: false,
                fullName: 'Lola',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/736x/61/77/f7/6177f7a61cccf7a5fa5429af4fb1b2a0.jpg',
                followed: true,
                fullName: 'Nadufa',
                status: 'I am a boss too',
                location: {city: 'Tallin', country: 'Estonia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/736x/61/77/f7/6177f7a61cccf7a5fa5429af4fb1b2a0.jpg',
                followed: false,
                fullName: 'Lola',
                status: 'I am a boss too!',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])

    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photoUrl} className={classes.userPhoto}/></div>
                            <div>
                                {
                                    u.followed
                                        ?
                                        <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        :
                                        <button onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;