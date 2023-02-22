export const loginRules = {
    email: {
        isRequired: true,
        isEmail: true,
    },
    password: {
        isStrongPassword: true,
    },
};