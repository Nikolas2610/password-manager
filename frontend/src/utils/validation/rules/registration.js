export const registerRules = {
    name: {
        isRequired: true,
        isMinLength: 4,
    }, 
    email: {
        isRequired: true,
        isEmail: true,
    },
    password: {
        isStrongPassword: true,
    },
    password_confirmation: {
        isRequired: true,
        isSame: 'password'
    },
};