import ProtoTypes from 'prop-types';

function List ({ items, title}) {
    return (
        <div className="border-black rounded border-2 p-2 m-2">
            <h4 className="text-lg">{title}</h4>
            <ul className="list-disc list-inside">
                {items}
            </ul>
        </div>
    )
}

List.propTypes = {
    items: ProtoTypes.array.isRequired,
    title: ProtoTypes.string.isRequired,
}

export default List;