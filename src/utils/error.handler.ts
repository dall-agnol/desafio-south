export const ErrorHandler = (statusCode: number, action: string) => {
    const status = {
        400: 'Solicitação incorreta',
        401: 'Sem permissão',
        403: 'Sem autorização',
        404: 'Solicitação não encontrada',
        500: 'Erro interno no servidor'
    }
    const data = {
        message: `Houve um erro ao ${action}. ${status[statusCode]}`,
        status: statusCode,
        timestamp: +new Date()
    }
    return data;
}