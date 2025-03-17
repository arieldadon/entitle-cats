import { createUseStyles } from "react-jss";

export const textAreaStyling = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    hint: {
        paddingBottom: '0.5em',
        marginLeft: '0.5em',
        fontFamily: 'sans-serif',
        opacity: '0.8'
    },
    textField: {
        minHeight: '6em',
        padding: '1em',
        resize: 'vertical',
        borderRadius: '20px',
        fontSize: '1.5em',
        borderWidth: '1px',
        '&::placeholder': {
            color: 'grey',
            opacity: '0.7',
            fontSize: '1em'
        },
    }
})