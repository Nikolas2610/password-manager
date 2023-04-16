export const addNewPasswordRules = {
    title: {
        isRequired: true,
        isMinLength: 4,
    }, 
    username: {
        isRequired: true,
    }, 
    website: {
        isRequired: true,
    }, 
    password: {
        isRequired: true,
    },
    notes: {
        isRequired: false,
    }
}