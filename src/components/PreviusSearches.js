import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function PreviusSearches() {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => {
                    return <div key={index} style={{ animationDelay: index * .1 + "s" }} className="search-item">
                        {search}
                    </div>
                })}
            </div>
            <div className="search-box">
                <input type="text" placeholder="search..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default PreviusSearches;