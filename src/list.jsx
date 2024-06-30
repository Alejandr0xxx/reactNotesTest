export default function List({Title, Description }) {
    return (
        <div className="card">
        <h1 className="title">{Title}</h1>
        <p className="description">{Description}</p>
        </div>
    )
};
