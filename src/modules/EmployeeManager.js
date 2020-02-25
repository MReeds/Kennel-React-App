const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/employees/${id}`)
        .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/employees`)
        .then(results => results.json())
    },
    delete(id) {
        return fetch(`${remoteUrl}/employees/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
    }
}