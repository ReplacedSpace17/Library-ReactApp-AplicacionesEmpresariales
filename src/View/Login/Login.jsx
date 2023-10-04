import '../styles/Login.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import imageLogin from '../../assets/imgLogin.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Login() {

    const Navegar = (ruta) => {
        useNavigate('/' + ruta);
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    const handleLogin = () => {
        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
        // Aquí puedes agregar la lógica de autenticación real
        if (email == "" && password == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No dejes vacío los campos de texto!',

            });
        }
        else {
            //navergar
            Navegar("Home");
        }

    };

    return (
        <body>
            <div className='imgContainer'>
                <img id='imageLogin' src={imageLogin} alt="Imagen de inicio de sesión" />
            </div>
            <div className='formContainer'>
                <div className='ContentBox'>
                    <h1>Iniciar sesión</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Correo electrónico"
                            variant="outlined"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button variant="contained" onClick={handleLogin}>
                            Iniciar sesión
                        </Button>
                    </Box>
                </div>
            </div>
        </body>
    );
}

export default Login;
