const remoteUrl = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteUrl}/animals/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteUrl}/animals`).then(result => result.json());
  },
  update(editedAnimal) {
    return fetch(`${remoteUrl}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteUrl}/animals/${id}`, {
      method: "DELETE"
    }).then(results => results.json());
  },
  post(newAnimal) {
    return fetch(`${remoteUrl}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json());
  }
};
