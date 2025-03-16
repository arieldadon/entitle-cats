import { createUseStyles } from "react-jss";

export const multiSelectTextFieldStyling = createUseStyles({
    wrapper: {
        
    },
    textField: {
        display: 'flex',
    },
    addButtonWrapper: {
        display: 'flex',
        width: '30%',
        alignItems: 'center'
    },
    addButton: {
        marginTop: '1.5em',
        marginLeft: '0.5em',
        borderRadius: '100%',
        color: 'grey',
        width: '3em',
        height: '3em',
        cursor: "pointer",
        '&:hover': {
            color: "#A5DD9B"
        }
    },
    listWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        marginTop: '1em'
    },
    value: {
        backgroundColor: '#D5E5D5',
        borderRadius: '20px',
        
        paddingRight: '0.7em',
        paddingLeft: '0.7em',
        paddingTop: '0.4em',
        paddingBottom: '0.4em',
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#FF8080",
            color: 'white'
        }
    }
})