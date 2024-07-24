import { URL_API } from "../constants/url"

export async function getOneProfession(professionId) {
    try {
        const res = await fetch(`${URL_API}/profesiones/${professionId}`)
        if (!res.ok) throw new Error('Network response was not ok')
        
        const data = await res.json()
        const profession = data.data

        return profession
    } catch (error) {
        console.error("Error fetching profession:", error)
        throw error
    }
}
