import api from './api'

export default {
    async carrinhos() {
        try {
            const res = await api.get('/carros');
            return res.data;
        } catch (error) {
            console.log("Erro ao listar carros: "+error.message)        
        }
    }
}
