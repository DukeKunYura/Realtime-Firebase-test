import React from 'react';
import Adder from './Adder';
import PostsList from './PostsList';

export default function Main() {

    return (
        <div className="App">
            <Adder />
            <PostsList />
        </div>
    );
}