import { footerLinks, socialIcons } from "@/utils/contants"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer-links d-flex justify-content-center">
            <div className="footer-navigation d-flex justify-content-between flex-column flex-lg-row">
                <div>
                    <h3 className="footer-brand">Software Recruitment co.</h3>
                    <div className="social-icons">
                        {socialIcons.map(({ Icon, id }) => (
                            <button key={id} className="btn p-0"> <Icon /></button>
                        ))}
                    </div>
                </div>
                <div className="page-links flex-wrap d-flex justify-content-around">
                    {Object.entries(footerLinks).map(([key, val]) => {
                        return <div key={key}>
                            <h2>{key}</h2>
                            {val.map((elem) => (
                                <ul key={elem.id} className="list-unstyled">
                                    <li>
                                        <Link href={elem.path} className="text-decoration-none">{elem.title}</Link>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer