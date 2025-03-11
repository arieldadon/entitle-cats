import { createUseStyles } from "react-jss";

export const catDetailsStyling = createUseStyles({
    wrapper: {
        display: 'flex',
        position: 'static',
        width: '100%',
        height: '100%',
        minHeight: '20em',
        borderRadius: '2em',
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        objectFit: 'cover',
    },
    details: {
        flex: 1,
        display: 'flex',
        marginTop: '3%',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        marginLeft: '1.5em'
    },
    title: {
        fontSize: '2em',
    },
    description: {
        color: '#3C3D37',
        paddingBottom: '5%',
        marginTop: '3%',
        fontSize: '1.2em',
        marginRight: '10%',
        borderBottom: 'solid 1px #3C3D37'
    },
    miceTitle: {
        fontSize: '1.5em',
        marginTop: '3%',
    },
    miceList: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3%',
        marginBottom: '5%'
    },
    mouse: {
        marginLeft: '5%',
        fontSize: '1.2em'
    }
})