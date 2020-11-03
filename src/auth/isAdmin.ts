export const isAdmin = (role: string) => {
    return role !== 'admin' ? false : true;
}