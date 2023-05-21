import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <h2 className='text-xl font-bold'>Khelnar Dokan</h2>
                    <p>Khelnar Dokan, your ultimate destination for toy  <br /> cars and more! We are passionate about providing a wide range br of toy cars</p>
                </div>
                <div>
                    <Link to='/mytoys'>My Toys</Link>
                    <Link to='/alltoy'>All Toys</Link>
                    <Link to='/addtoys'>Add Toys</Link>
                    <Link to='/login'>Login</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer