'use client'
import { useRef, useState } from 'react';
import Link from "next/link";
import ArrowDown from '@/public/icons/home/arrow_down.svg';
import { navbarLinks } from '@/utils/contants';
import { useOnClickOutside } from 'usehooks-ts';

const Navbar = () => {
    const ref = useRef(null)
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setNavbarOpen(!isNavbarOpen);
    };
    useOnClickOutside(ref, () => setNavbarOpen(false))

    return (
        <nav className="navbar navbar-expand-lg navbar-light static-navbar d-flex justify-content-center position-fixed bg-white">
            <div className="d-flex align-items-center justify-content-between navbar-content">
                <Link className="navbar-brand" href="#">Software Recruitment co.</Link>

                <div
                    onClick={handleNavbarToggle}
                    className="navbar-toggler position-relative"
                >
                    <span className="navbar-toggler-icon"></span>
                    <div
                        ref={ref}
                        className={`flex-column justify-content-between position-absolute ${isNavbarOpen ? 'show' : ''} navbarBurger`}
                    >
                        <ul className="navbar-nav mr-auto gap-4 flex-column navbar-nav-burger">
                            {navbarLinks.map(elem => (
                                <li className="nav-item d-flex align-items-center" key={elem.id}>
                                    <Link className="nav-link" href={elem.path}>{elem.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex gap-2 flex-column navbar-btn">
                            <button className="btn btn-header btn-yellow my-2 my-sm-0 d-flex justify-content-center align-items-center" type="button"><span>Upload CV</span></button>
                            <button className="btn btn-header btn-light-salmon my-2 my-sm-0 d-flex justify-content-center align-items-center" type="button"><span>Contact us</span></button>
                        </div>
                    </div>
                </div>


                <div className="collapse navbar-collapse d-none d-xl-flex justify-content-between">
                    <ul className="navbar-nav mr-auto gap-4">
                        {navbarLinks.map((elem) => (
                            <li className="nav-item d-flex align-items-center " key={elem.id}>
                                <Link className="nav-link" href={elem.path}>{elem.title}</Link><ArrowDown />
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex gap-2">
                        <button className="btn btn-header btn-yellow my-2 my-sm-0 d-flex justify-content-center align-items-center" type="button">
                            <span>Upload CV</span>
                        </button>
                        <button className="btn btn-header btn-light-salmon my-2 my-sm-0 d-flex justify-content-center align-items-center" type="button">
                            <span>Contact us</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
