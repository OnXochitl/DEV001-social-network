/* eslint-disable max-len */
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn(GoogleAuthProvider);
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn((uid) => Promise.resolve({ user: { id: { uid } } }));
