import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#385E72',
            light: '#71A4BF',
            dark: '#253f4d',
        },
        secondary: {
            main: '#735938',
            light: '#BF8437',
            dark: '#4b3a24'
        },
        background: {
            default: "#F5F5F5"
        }
    },

    typography: {
        allVariants: {
            color: "#253f4d"
        },
        button: {
            textTransform: 'none'
        }
    }
})
