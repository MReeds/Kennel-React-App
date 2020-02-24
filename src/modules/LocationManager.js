const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/locations/${id}`)
        .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/locations`)
        .then(result => result.json())
    }
}