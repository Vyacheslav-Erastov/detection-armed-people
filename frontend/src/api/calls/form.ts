const GET = (path: string) => {
    let config = {
        method: "GET",
        headers: {
            "accept": "application/json"
        }
    }

    return fetch(path, config).then(data => promise(data))
}