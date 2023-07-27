const Refresh = ({ onClick }) => {
    return (
        <div className='refresh-button flow-6'>
            <button onClick={onClick} className='flex align-center'><span className='random-text'>random</span><span className="material-symbols-outlined">
                autorenew
            </span></button>
        </div>
    )
}


export default Refresh
