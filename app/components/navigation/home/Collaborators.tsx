import { ourCollaborators } from "@/utils/contants"
import Image from "next/image"

const Collaborators = () => {
    return (
        <div className="collaborators-list d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column align-items-center collabators">
                <p>Who we work with</p>
                <div className="d-flex align-items-center justify-content-between collabators-logos flex-wrap">
                    {ourCollaborators.map(elem => (
                        <Image key={elem.id} src={elem.url} alt={elem.alt} width={elem.width} height={elem.height} className={`${elem.alt} object-fit-contain`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collaborators