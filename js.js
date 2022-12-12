const getData = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(response);
        const word_from_api = await response.json();
        console.log(word_from_api);
    } catch (error) {
        console.log(error);
    }
}

getData("tree");