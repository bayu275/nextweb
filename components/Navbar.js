import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="navbar">
                <ul>
                    <li><Link href="/"><a>HOME</a></Link></li>
                    <li><hr/><hr/></li>
                    <li><Link href="/blog"><a>BLOG</a></Link></li>
                </ul>
                <style jsx>{`
                    .navbar {
                        height: 3rem;
                        display: flex;
                        justify-content: center;
                        border-bottom: 1px solid #CCCCCC;
                        box-shadow: 0px 5px 10px -6px #ccc;
                    }
                    hr {
                        display: inline;
                    }
                    ul {
                        align-items: center;
                        display: flex;
                        font-size: 15px;
                        padding-left: 0;
                    }
                    li {
                        list-style: none;
                        padding: 0 2rem;
                    }
                    li:first-child a :hover, li:last-child a :hover{
                        font-weight: bold;
                        color: #000000;
                    }
                    a {
                        text-decoration: none;
                        color: #454545;
                        font-size: 14px;

                    }
                `}</style>
            </nav>
    )
}