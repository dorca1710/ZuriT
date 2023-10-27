<template>
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: null,
      };
    },
    methods: {
      login() {
        // Simula una solicitud al servidor para autenticar al usuario.
        // En una aplicación real, esta solicitud se realizaría al servidor MEVN.
  
        // Aquí se simula una respuesta exitosa (el usuario es autenticado).
        const mockResponse = {
          success: true,
          message: 'Inicio de sesión exitoso',
          token: 'jsonwebtoken_here',
        };
  
        if (mockResponse.success) {
          // Si la autenticación es exitosa, guarda el token JWT en localStorage.
          localStorage.setItem('token', mockResponse.token);
  
          // Redirige al usuario a la página de gestión de turnos o a donde corresponda.
          this.$router.push('/gestion-turnos');
        } else {
          // En caso de error de autenticación, muestra un mensaje de error.
          this.errorMessage = mockResponse.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .error-message {
    color: #ff0000;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  </script>
  