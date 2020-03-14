import Head from 'next/head';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const blog = () => {
    return (
        <Layout>
            <Head>
                <title>||Programmer Modern</title>
            </Head>
            <Navbar/>
        </Layout>
    )
}

export default blog;