import { Alert, Box, Button, Grid, LinearProgress, Link, Paper, TextField } from '@mui/material'
import React from 'react'
import * as yup from 'yup'

import { useStyles } from './styles';

const SignIn: React.FC = () => {

    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.mainWrapper}>
                <Paper elevation={3} className={classes.paperWrapper}>
                    <Box
                        component="form"
                        // onSubmit={handleSubmit(onSubmit)} 
                        noValidate
                        data-testid="form"
                        className={classes.formBox}
                    >
                        <h3>Login</h3>

                        <TextField
                            required
                            name="email"
                            id="email"
                            label="Digite seu e-mail"
                            type="email"
                            autoFocus
                        //   error={Boolean(errors.email)}
                        //   {...register("email", 
                        //     { onChange: (e) => handleChange(e) }
                        //   )}
                        />

                        <TextField
                            required
                            name="password"
                            id="password"
                            label="Digite sua senha"
                            type="password"
                            autoComplete="new-password"
                        //   error={Boolean(errors.password)}
                        //   {...register("password", 
                        //     { onChange: (e) => handleChange(e) }
                        //   )}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 2, mb: 1 }}
                        >
                            Acessar
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot-password" variant="body2" data-testid="signup-link">
                                    Esqueceu sua senha?
                                </Link>
                            </Grid>
                            <Grid item xs className={classes.signupLink}>
                                <Link href="/signup" variant="body2" data-testid="signup-link">
                                    Crie sua conta!
                                </Link>
                            </Grid>
                        </Grid>

                        {/* {isLoading && (
              <LinearProgress className={classes.linearProgress} />
            )}

            {mainError !== '' && (
              <Alert severity="error" className={classes.alert}>{mainError}</Alert>
            )} */}
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default SignIn;