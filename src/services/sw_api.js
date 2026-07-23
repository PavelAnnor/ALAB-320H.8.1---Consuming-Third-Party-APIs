


export default async function getAllStarships(){



    try {

        const result = await fetch("https://swapi.dev/api/starships/");
        const data = await result.json()
      
        return(data.results)
        
        
    } catch (error) {
        


    }
}