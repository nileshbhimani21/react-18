// eslint-disable-next-line no-useless-escape
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/gm
// eslint-disable-next-line no-useless-escape
export const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/