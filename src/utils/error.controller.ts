const messages = (properties): string => {
    const field: string = properties.path;
    let result: string = `O campo ${field}`;
    switch (properties.type) {
        case 'required':
            result += ` é obrigatório.`;
            break;
        case 'enum':
        result = ' não é um valor permitido';
        break;
        default:
            result += ` é inválido.`;
            break;
    }

    return result;
}


export const ErrorController = (objectErrors) => {
    const errors: Array<string> = [];
    const keys = Object.keys(objectErrors);
    for (let i = 0; i < keys.length; i++) {
        let errMessage = messages(objectErrors[keys[i]].properties);
        errors.push(errMessage);
    }
    return errors;
}