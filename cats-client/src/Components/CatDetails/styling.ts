import { createUseStyles } from "react-jss";

export const catDetailsStyling = createUseStyles({
    wrapper: {
        display: 'flex',
        position: 'static',
        flexDirection: 'column',
        // minWidth: '20em',
        // width: '30em',
        maxWidth: '25em',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        minHeight: '20em',
        borderRadius: '2em',
        overflow: 'hidden',
        backgroundColor: '#F8F6F4',
    },
    '@media (max-width: 1024px)': {
        wrapper: {
            flexDirection: 'column'
          }  
        },
    image: {
        // flex: 1,
        height: '40%',
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
        fontSize: '1.5em',
    },
    description: {
        color: '#3C3D37',
        paddingBottom: '5%',
        marginTop: '3%',
        fontSize: '1em',
        marginRight: '10%',
        borderBottom: 'solid 1px #3C3D37'
    },
    miceTitle: {
        fontSize: '1.3em',
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
        fontSize: '1.1em'
    }
})