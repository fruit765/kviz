import './SlideNumeration.scss';
import c from 'classnames';

export default function SlideNumeration(props) {
    let items = [];
    for (let i = 1; i <= props.count; i++) {
        items.push(
            <div className={c('slide-numeration__item', props.num === i && 'slide-numeration__item_active')} key={i}>{i}</div>
        );
    }

    return (
        <div className="slide-numeration">
            {items}
        </div>
    );
}