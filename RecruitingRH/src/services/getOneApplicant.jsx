import { URL_API } from "../constants/url"

export async function getOneApplicant(applicantId) {
    try {
        const res = await fetch(`${URL_API}/applicants/${applicantId}`)
        if (!res.ok) throw new Error('Network response was not ok')
        
        const data = await res.json()
        const applicant = data.data.applicant

        return applicant
    } catch (error) {
        console.error("Error fetching applicant:", error)
        throw error
    }
}
