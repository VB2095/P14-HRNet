/* eslint-disable react/prop-types */
//banner with props for title and subtitle
import './banner.scss';

export default function Banner(props) {
    return (
        <div className="banner">
            <p>{props.title}</p>
        </div>
    )
}