import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';
import {Spinner} from './Spinner';
import { Card } from './Card';

export const Blogs = () => {

    //step 3 : use Context
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='blog'>
            {
                loading ?
                (<Spinner />)
                :
                (
                    posts.length === 0 ?
                        (
                            <div>Post Not Found</div>
                        )
                        :
                        (
                            posts.map((post) => {
                                return <Card key={post.id} post={post} />;
                            })
                        )
                )
            }
        </div>
    )
}
