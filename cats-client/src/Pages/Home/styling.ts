import { createUseStyles } from "react-jss";

export const homePageStyles = createUseStyles({
    page: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100svw',
        minHeight: '100svh',
        backgroundColor: "white"
    },
    catList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(25em, 1fr))',
        // gap: '200px',
        justifyContent: 'center',
        // gridAutoRows: '50% 50%',
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'left',
        // flexDirection: 'column',
        // backgroundColor: "blue",
        marginTop: '5%',
        marginBottom: '5%',
        gap: '4vw',
        maxWidth: '95%',
        // maxWidth: '75rem'
    }
})