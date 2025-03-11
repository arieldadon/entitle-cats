import { createUseStyles } from "react-jss";

export const homePageStyles = createUseStyles({
    page: {
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        width: '100svw',
        minHeight: '100svh',
        backgroundColor: "red"
    },
    catList: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5%',
        marginBottom: '5%',
        gap: '100px',
        width: '90%',
        maxWidth: '75rem'
    }
})