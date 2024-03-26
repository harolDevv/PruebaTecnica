import { useEffect, useState } from 'react';

export const usePersonValidation = (nombre,apellido,edad,cedula) => {

  const [errors, setErrors] = useState({ 
    nombre:'',
    apellido:'',
    edad:'',
    cedula:''
    });


    //validacion de email
    useEffect(() => {
        if (nombre === '') {
        setErrors((prev) => ({ ...prev, nombre: 'Usuario obligatorio' }));
        } else if (nombre.length < 2) {
        setErrors((prev) => ({ ...prev, nombre: 'Usuario invalido' }));
        } else {
        setErrors((prev) => ({ ...prev, nombre: 'success' }));
        }
    }, [nombre]);

    useEffect(() => {
        if (apellido === '') {
        setErrors((prev) => ({ ...prev, apellido: 'Usuario obligatorio' }));
        } else if (apellido.length < 2) {
        setErrors((prev) => ({ ...prev, apellido: 'Usuario invalido' }));
        } else {
        setErrors((prev) => ({ ...prev, apellido: 'success' }));
        }
    }, [apellido]);

    useEffect(() => {
        if (edad === '') {
            setErrors((prev) => ({ ...prev, edad: 'Edad obligatoria' }));
        } else if (!/^\d+$/.test(edad)) {
            setErrors((prev) => ({ ...prev, edad: 'La edad debe ser un número' }));
        } else {
            setErrors((prev) => ({ ...prev, edad: 'success' }));
        }
    }, [edad]);
    
    
    useEffect(() => {
        if (cedula === '') {
            setErrors((prev) => ({ ...prev, cedula: 'Cédula obligatoria' }));
        } else if (!/^\d{10}$/.test(cedula)) {
            setErrors((prev) => ({ ...prev, cedula: 'La cédula debe ser un número de 10 dígitos' }));
        } else {
            setErrors((prev) => ({ ...prev, cedula: 'success' }));
        }
    }, [cedula]);


  return errors;
};