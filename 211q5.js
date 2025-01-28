function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.includes("error")) {
                reject("Error: Invalid URL");
            } else {
                resolve("Data fetched successfully.");
            }
        }, 1000);
    });
}
fetchData("https://example.com/data")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
fetchData("https://example.com/error")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });                         