const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/locations/${id}`)
        .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/locations`)
        .then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteUrl}/locations/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
    },
    post(newLocation) {
        return fetch(`${remoteUrl}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        }).then(data => data.json())
    }
}