export const registerRules = {
    username: {
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
    confirmPassword: {
        isRequired: true,
        isSame: 'password'
    },
};