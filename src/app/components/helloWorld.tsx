'use client'
import { Fragment } from 'react';

function HelloWorld() {
    const first = "Hello";
    const last = "World";

    return (
        <Fragment>
            <h1>{first} {last}!</h1>
            <p>This page was created based on <a href='https://www.youtube.com/watch?v=SqcY0GlETPk' title="Created by Mosh Hamedani" target="_blank">React Tutorial for Beginners (Hamedani, 2023)</a> and the <a href="https://react.dev/learn" target="_blank">React Documentation</a>.</p>
            <br /><br />
        </Fragment>
    );
}

export default HelloWorld;