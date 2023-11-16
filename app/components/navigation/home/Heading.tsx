import Image from "next/image"

const Heading = () => {
    return (
        <div className="header-content">
            <div className="header-content-container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="d-flex flex-column content">
                    <p className="text-white small-header">Software Recruitment Specialists</p>
                    <h2 className="text-white header-text">Elevate your career</h2>
                    <form className="job-form">
                        <input type="text" placeholder="E.g. networking" />
                        <button type="submit"><span>Search jobs</span></button>
                    </form>
                </div>
                <div className="header-img">
                    <Image src='/images/home/specialist.png' alt="specialist" priority fill className="specialist-icon" />
                </div>
            </div>
        </div>
    )
}

export default Heading