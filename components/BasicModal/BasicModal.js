import Link from "next/link";
import Image from "next/image";
import iosdownload from "../../assets/iosdownload.webp";
import androiddownload from "../../assets/androiddownload.webp";
import './BasicModal.css'
import "../header/Header.css";

export function BasicModal({ path }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <Link href={path} className='modal-close'>X</Link>
                <h1 className="modal-title">Download the app now to join and get notified about the event!</h1>
                <div className="header-cta">
                    <div className="header-download-buttons">
                        <Link
                            href="/download/ios"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                src={iosdownload} 
                                alt="iOS Download" 
                                width="200"
                            />
                        </Link>
                    </div>
                    <div className="header-download-buttons">
                        <Link
                            href="/download/android"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src={androiddownload}
                                alt="Android Download"
                                width="200"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}