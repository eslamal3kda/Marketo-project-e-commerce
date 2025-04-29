import { Link } from "react-router-dom";

export default function GallerySubList({ label, title, page1, page2, page3, page4, page5, page6, page7, navigation }) {
    if (navigation)
        return (
            <>
                <ul className="gallery-sub-list">
                    <p className="custom-header">{label}</p>
                    <span>{title}</span>
                    <li>
                        <Link to={page1}>{page1}</Link>
                    </li>
                    <li>
                        <Link to={page2}>{page2}</Link>
                    </li>
                    <li>
                        <Link to={page3}>{page3}</Link>
                    </li>
                    <li>
                        <Link to={page4}>{page4}</Link>
                    </li>
                    <li>
                        <Link to={page5}>{page5}</Link>
                    </li>
                    <li>
                        <Link to={page6}>{page6}</Link>
                    </li>
                    <li>
                        <Link to={page7}>{page7}</Link>
                    </li>
                </ul>
            </>
        );

    return (
        <>
            <ul className="gallery-sub-list">
                <p className="custom-header">{label}</p>
                <span>{title}</span>
                <li>{page1}</li>
                <li>{page2}</li>
                <li>{page3}</li>
                <li>{page4}</li>
                <li>{page5}</li>
                <li>{page6}</li>
                <li>{page7}</li>
            </ul>
        </>
    );
}
