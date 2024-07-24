import { URL_API } from "../constants/url"

export async function getAllApplicants() {
    try {
        const res = await fetch(`${URL_API}/api/aspirantes`)
        if (!res.ok) throw new Error('Network response was not ok')
        
        const data = await res.json()
        const applicantsList = data.data
        console.log(applicantsList)
        return applicantsList
    } catch (error) {
        console.error("Error fetching applicants:", error)
        throw error
    }
}
