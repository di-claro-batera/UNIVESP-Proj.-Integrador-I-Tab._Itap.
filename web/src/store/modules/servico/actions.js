import types from './types'

export function allServicos() {
    return { type: types.ALL_SERVICOS };
}

export function updateServico(payload) {
    console.log('Ação updateServico sendo disparada', payload);
    return { type: types.UPDATE_SERVICO, payload };
}


export function addServico() {
    return { type:types.ADD_SERVICO };
}

export function resetServico() {
    return { type:types.RESET_SERVICO };
}

export function removeArquivo(key) {
    return { type:types.REMOVE_ARQUIVO, key };
}

export function removeServico() {
    return { type:types.REMOVE_SERVICO };
}
