export async function applicantExist(dni, email) {
    try {
        const res = await fetch("http://localhost:3000/api/aspirantes")
        if (!res.ok) throw new Error('Network response was not ok')
        
        const data = await res.json()
        const applicants = data.data

        const errors = []

        const applicantExist = applicants.find(a => a.dni == dni || a.email == email)
        if (applicantExist) {
            if (applicantExist.dni == dni) {
                errors.push("El dni ya se encuentra registrado")
            }
            if (applicantExist.email == email) {
                errors.push("El email ya se encuentra registrado")
            }
        }

        return errors
    } catch (error) {
        console.error("Error fetching applicants:", error)
        throw error
    }
}
