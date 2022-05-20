import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },

    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 50px)'
    },

    paperWrapper: {
        padding: '30px',
        minHeight: '470px',
        '@media (min-width: 1000px)': {
            maxHeight: '470px',
            maxWidth: '940px',
            height: '470px',
            width: '940px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }
    },

    logoImage: {
        width: '250px',
        marginLeft: '-15px',
        marginTop: '-30px',
        marginBottom: '-35px'
    },

    formBox: {
        width: '350px'
    },

    linearProgress: {
        marginTop: '20px'
    },

    alert: {
        marginTop: '20px',
        padding: '1px 16px 1px 16px'
    },

    footer: {
        marginTop: 'auto',
        backgroundColor: '#E7EAED',
        padding: '10px 10px 15px 10px'
    },

    signupLink: {
        textAlign: 'right'
    }
}));

export { useStyles }
