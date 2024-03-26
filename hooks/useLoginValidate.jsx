import { useEffect, useState } from 'react';

export const useLoginValidation = (user, password) => {

  const [errors, setErrors] = useState({ user: '', password: '' });
    //validacion de email
    useEffect(() => {
        if (user === '') {
        setErrors((prev) => ({ ...prev, user: 'Usuario obligatorio' }));
        } else if (user.length < 2) {
        setErrors((prev) => ({ ...prev, user: 'Usuario invalido' }));
        } else {
        setErrors((prev) => ({ ...prev, user: 'success' }));
        }
    }, [user]);
    //validacion de password
    useEffect(() => {
        if (password === '') {
        setErrors((prev) => ({ ...prev, password: 'Contraseña obligatoria' }));
        } else if (!/^.{6,30}$/i.test(password)) {
        setErrors((prev) => ({ ...prev, password: 'Contraseña tiene al menos 6 caracteres' }));
        } else {
        setErrors((prev) => ({ ...prev, password: 'success' }));
        }
    }, [password]);

  return errors;
};