import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Filters } from "./components/Filters/Filters";
import { Cards } from "./components/Cards/Cards";

export const App = () => {
    return (
        <div>
            <h1 className="text-center ubuntu my-4">
                Rick & Morty <span className="text-primary">Wiki</span>
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Filters />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}