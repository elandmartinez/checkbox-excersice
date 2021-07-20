self.addEventListener("install", (event) => {
    console.log("se ha inicidalizado el serviceWorker correctamente")
    event.waitUntil(() => {
        console.log("recharged")
    })
})
