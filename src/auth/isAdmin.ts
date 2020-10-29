export const isAdmin = role => {
    return role !== 'admin' ? false : true;
}