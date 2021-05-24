import React from 'react';
import s from './Users.module.css';
import logoPhoto from '../../assets/logo.jpeg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? s.selected : ''} // UI pagination
                        onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
                })
            }
            <div>
                {
                    props.users.map(user => <div key={props.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/'+ user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : logoPhoto} className={s.image} />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.name}

                            </div>
                            <div>
                                {user.status}
                            </div>

                        </span>
                        <span>
                            <div>{"user.locatin.city"}</div>
                            <div>{"user.locatin.country"}</div>
                        </span>
                    </div>)
                }
            </div>
        </>
    )
}


export default Users;