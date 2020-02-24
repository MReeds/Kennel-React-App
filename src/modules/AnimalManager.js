const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/animals/${id}`)
        .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/animals`)
        .then(result => result.json())
    }
}