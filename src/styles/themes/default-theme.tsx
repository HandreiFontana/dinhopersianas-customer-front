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
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
                    backgroundColor: 'white',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                },
                '.MuiOutlinedInput-root': {
                    height: '2.1em'
                },
                '*::-webkit-scrollbar': {
                    width: '0.1em'
                },
                '*::-webkit-scrollbar-track': {
                    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)'
                },
                '.MuiToolbar-root.MuiToolbar-gutters': {
                    paddingLeft: 0,
                    marginLeft: 0,
                },
                '.MuiTableCell-root':
                {
                    borderBottom: 'none !important',
                    padding: '0px !important',
                    alignItems: 'center',
                    lineHeight: '1.8rem !important'
                },
                '.MuiTableCell-head':
                {
                    lineHeight: '2.5rem !important'
                },
                '.MuiGrid-item': {
                    flexGrow: 1
                }
            }
        },

        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                size: 'small',
                margin: 'dense',
                autoComplete: 'off',
                fullWidth: true
            },
        },

        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&:-webkit-autofill": {
                        transitionDelay: "9999s",
                        transitionProperty: "background-color, color",
                    },
                },
            },
        },

        MuiInputLabel: {
            defaultProps: {
                shrink: true
            }
        },

        MuiButtonBase: {
            defaultProps: {
            }
        }
    },

    zIndex: {
        appBar: 1200,
        drawer: 1100
    },

    transitions: {
        duration: {
            standard: 300,
        }
    }
})
