function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

async function getData() {
    console.log("Start fetching...");
    const result = await fetchData();
    console.log(result);
    console.log("End fetching...");
}

getData();
