const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/employee/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employee`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/employee/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newEmployee) {
        return fetch(`${remoteURL}/employee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    },
    update(editedEmployee) {
        return fetch(`${remoteURL}/employee/${editedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
    }
}