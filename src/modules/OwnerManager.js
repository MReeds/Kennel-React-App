const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/owners/${id}`)
        .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/owners`)
        .then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteUrl}/owners/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
    },
    post(newOwner) {
        return fetch(`${remoteUrl}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())
    }
}