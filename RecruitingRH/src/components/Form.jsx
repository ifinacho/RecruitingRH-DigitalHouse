import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { applicantExist } from "../validations/applicantExist";
import { getAllProfessions } from "../services/getAllProfessions";
import swal from "sweetalert"

export default function Form () { 
    const [validated, setValidated] = useState("row g-2 needs-validation");
    const [professionsAPI, setProfessionsAPI] = useState()
    const navigate = useNavigate()

    const [button, setButton] = useState({title: "Enviar solicitud", color: "btn btn-primary" })
    const [ifExist, setIfExist] = useState([])
    const [imageSetting, setImageSetting] = useState({
        class: "d-none",
        src: ""
    })

    // values of inputs
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [dni, setDni] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [urlLinkedin, setUrlLinkedin] = useState()
    const [birthdate, setBirthdate] = useState()
    const [gender_id, setGender_id] = useState()
    const [professions, setProfessions] = useState()
    const [photo, setPhoto] = useState()

    useEffect(() => {
        const fetchProfessions = async () => {
            const professionsList = await getAllProfessions()
            setProfessionsAPI(professionsList)
        }
        fetchProfessions()
      }
    , [])

    
    const handleSubmit = async (event) => {
        let appExist = []
        event.preventDefault();
        const form = event.currentTarget;
        appExist = await applicantExist(dni, email)
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated("row g-2 needs-validation")
        } 
        
        if (form.checkValidity()) {
            if (appExist.length > 0) {
                console.log(appExist);
                await setIfExist(appExist)
                swal({
                    title: "Error",
                    text: appExist[0],
                    icon: "error",
                    button: "Aceptar"
                })
                return appExist = []
            }
            const formData = new FormData();
            formData.append("nombre", name) // Cambiado de nombre a name
            formData.append("apellido", lastName) // Cambiado de apellido a lastName
            formData.append("dni", dni)
            formData.append("email", email)
            formData.append("telefono", phoneNumber) // Cambiado de telefono a phoneNumber
            formData.append("urlLinkedin", urlLinkedin)
            formData.append("fechaNacimiento", birthdate) // Cambiado de fechaNacimiento a birthdate
            formData.append("sexoId", gender_id) // Cambiado de sexoId a gender_id
            formData.append("profesionId", professions) // Cambiado de profesionId a professions
            formData.append("imagen", photo) // Cambiado de imagen a photo
    
            console.log(formData);
    
            const response = await fetch("http://localhost:3000/api/aspirantes", {
                method: "POST",
                body: formData
            });
    
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            console.log(data);
    
            setButton({title: "Solicitud enviada con éxito!", color: "btn btn-success" });
            setTimeout(()=>{
                navigate("/applicants")
            }, 2500)
        }
        setValidated("row g-2 needs-validation was-validated");
    };
    
    const photoPreview = (e) => {
        const file = e.target.files[0]

        setPhoto(file); 
        console.log(file); 

        if (file) {
            setImageSetting({
                class: "d-flex flex-column mt-3 mb-3 rounded mx-auto justify-content-center",
                src: URL.createObjectURL(file)
            })
        }
    }

    const deletePhotoInput = useRef(null)
    const deletePhotoPreview = () => {
        deletePhotoInput.current.value = ""
        setImageSetting({
            class: "d-none",
            src: ""
        })
        console.log(deletePhotoInput);
    }

    

    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">

            <h2>Postulación de Aspirante</h2>
            
            <form className={validated} onSubmit={handleSubmit} noValidate  >
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" required minLength={2} maxLength={50} onChange={e => setName(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte su nombre. Limite de 50 letras
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" required minLength={2} maxLength={50} onChange={e => setLastName(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte su apellido. Limite de 50 letras
                    </div>
                </div>
                <div className="col-mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" required onChange={e => setEmail(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte un email valido.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" id="dni" name="dni" required max={9999999999} onChange={e => setDni(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte su DNI. 
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
                    <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" required max={9999999999} onChange={e => setPhoneNumber(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte su numero de teléfono. Máximo 10 cifras
                    </div>
                </div>
                <div className="col-mb-3">
                    <label htmlFor="urlLinkedin" className="form-label">URL de Linkedin</label>
                    <input type="text" className="form-control" id="urlLinkedin" name="urlLinkedin" required onChange={e => setUrlLinkedin(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte la url de su perfil de Linkedin
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="birthdate" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="birthdate" name="birthdate" required onChange={e => setBirthdate(e.target.value)}></input>
                    <div className="invalid-feedback">
                        Inserte su fecha de nacimiento. 
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender_id" className="form-label">Sexo</label>
                    <select className="form-select" id="gender_id" name="gender_id"required onChange={e => setGender_id(e.target.value)}>
                    <option selected disabled value="">Seleccione su sexo</option>
                    <option value={1}>Masculino</option>
                    <option value={2}>Femenino</option>
                    <option value={3}>Prefiero no decirlo</option>
                    </select>
                    <div className="invalid-feedback">
                        Seleccione una opción.
                    </div>
                </div>
                <div className="col-mb-3">
                    <label htmlFor="professions" className="form-label">Profesión</label>
                    <select className="form-select" id="professions" name="professions" required onChange={e => { console.log(e.target.value); setProfessions(e.target.value)}}>
                    <option selected disabled value="">Seleccione su Profesión</option>
                    {
                        Array.isArray(professionsAPI) && professionsAPI.map((profession, i) => 
                            <option key={profession.nombre + i} value={profession.id}>{profession.nombre}</option>
                        )
                    }
                    </select>
                    <div className="invalid-feedback">
                        Seleccione una opción.
                    </div>
                </div>
                <div className="col-mb-3 d-flex flex-column">
                    <label htmlFor="photo" className="form-label ">Foto del aspirante *(opcional)</label>
                    <input type="file" ref={deletePhotoInput} className="form-control" id="photo" name="photo" accept=".jpg, .jpeg, .png" 
                    onChange={photoPreview}>
                    </input>
                    <div className="invalid-feedback">
                        Debe ser .jpg, .jpeg o .png
                    </div>
                    <div className={imageSetting.class}>
                        <h5 className="align-self-center">Vista previa de imagen</h5>
                        <img src={imageSetting.src} alt="" name="imgPreview" id="imgPreview" className="rounded-circle "></img>
                        <button type="button" onClick={deletePhotoPreview} className="btn btn-danger mt-3">Descartar imagen</button>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Aceptar los terminos y condiciones
                    </label>
                    <div className="invalid-feedback">
                        Es necesario aceptar los terminos y condiciones.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className={ button.color } type="submit" >{ button.title }</button>
                </div>
                <h5 className="ifExist pt-3 mb-2 text-danger text-center">
                    {ifExist[0]}
                </h5>
            </form>

            </main>
            {/* <!--Fin Sección contenido--> */}

        </>
    )
    
}