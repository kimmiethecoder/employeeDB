document.getElementById('updateButton').addEventListener('click', updateEntry)
document.getElementById('deleteButton').addEventListener('click', deleteEntry)

async function updateEntry() {
    try {
        const response = await fetch('updateEntry', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: document.getElementsByName('name')[0].value,
                badge: document.getElementsByName('badge')[0].value,
                birthdate: document.getElementsByName('birthdate')[0].value,
                status: document.getElementsByName('status')[0].value,
                dept: document.getElementsByName('dept')[0].value,
                des: document.getElementsByName('des')[0].value,
                join: document.getElementsByName('join')[0].value,
                lvl: document.getElementsByName('lvl')[0].value
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

async function deleteEntry() {
    const input = document.getElementById('deleteInput')
    try {
        const response = await fetch('deleteEntry', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: input.value
            })
        })
        const data = await response.json()
        location.reload()
    } catch(err) {
        console.log(err)
    }
}