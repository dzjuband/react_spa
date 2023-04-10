function Main() {
    return (
        <div className="card paddLeft" style={{width: "18rem"}}>
        <div className="card-header">
            Submenu
        </div>
            <nav>
                <ul className='list-group list-group-flush'>
                    <li className="list-group-item textCenter"><a href="/create" >Create note</a></li>
                    <li className="list-group-item textCenter"><a href="/note" >Show note</a></li>
                </ul>
            </nav>
          </div>  

    );
}

export default Main;