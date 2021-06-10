import './NextSlideBtn.scss';

export default function NextSlideBtn(props) {
    return (
        <button className="next-slide-btn"
            onClick={() => {
                props.callback();
            }}
        >
            {
                props.text
            }
        </button>
    );
}