import { URL_API } from "../constants/url"

export async function getAllProfessions() {
    try {
        const res = await fetch(`${URL_API}/api/profesiones`)
        if (!res.ok) throw new Error('Network response was not ok')
        const data = await res.json()
        console.log("Professions response:", data)
        const professionsList = data.data
        console.log("Professions fetched:", professionsList)
        return professionsList
    } catch (error) {
        console.error("Error fetching professions:", error)
        throw error
    }
}
