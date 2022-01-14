import React from 'react';
import { useStoreState } from 'easy-peasy';

function Footer() {
    const postCount = useStoreState(state => state.postCount);
    const today = new Date();

    return (
        <footer className="Footer">
            <p style={{ textAlign: 'center' }}>{postCount} Blog Posts</p>
            <p>Copyright &copy; {today.getFullYear()} </p>
        </footer>
    );
}

export default Footer;
