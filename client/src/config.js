const isProd = () => {
    const prod = false // REMINDER: Set to true before building

    if (prod) {
        return 'https://simplemoviesearchapp.herokuapp.com/'
    } else {
        return 'http://localhost:3001'
    }
}

export const config = {
    url: isProd()
}
