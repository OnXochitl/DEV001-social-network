export const createUserWithEmailAndPassword = jest.fn((auth, email, contraseña) => Promise.resolve({ user: { email } }));
export const getAuth = jest.fn();