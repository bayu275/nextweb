import Footer from '../components/Footer';

const layout = (props) => {
    return (
        <>
            {props.children}
            <Footer/>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Alice&family=Lato:wght@300&family=Open+Sans:wght@300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Bellota:ital,wght@1,300&display=swap');
                * {
                font-family: 'Open Sans', sans-serif,'Alice', serif,'Lato', sans-serif;
                }
                body {
                background-color: #ffffff;
                }
                em {
                font-weight: bold;
                }
            `}</style>
        </>
    )
}

export default layout;