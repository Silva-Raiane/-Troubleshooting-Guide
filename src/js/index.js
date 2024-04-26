document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Login realizado com sucesso!');
        // Redirect or perform other actions after successful login
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        localStorage.setItem('user', JSON.stringify({ username: newUsername, password: newPassword }));
        alert('Registro realizado com sucesso!');
        // Redirect or perform other actions after successful registration
    }
});

// Check if a user is already logged in
const savedUser = localStorage.getItem('user');
if (savedUser) {
    const user = JSON.parse(savedUser);
    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
    alert('Usuário encontrado!');
}