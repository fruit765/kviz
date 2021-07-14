import './SlideNumerationText.scss';

export default function SlideNumerationText(props) {
    return (
        <div className="slide-numeration-text">
            <span className="slide-numeration-text__current">{props.num}</span>/
            <span className="slide-numeration-text__all">{props.count}</span>
        </div>
    );
}