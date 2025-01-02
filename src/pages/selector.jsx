
import { useState } from "react"
import Action from "../assets/action.png"
import styles from "../styles/selector.module.css"
const Movies = [
    {
        id: "action",
        label: "Action",
        image: <img src={Action} alt="action" width={200} height={200} />
    },
    {
        id: "drama",
        label: "Drama",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "romance",
        label: "Romance",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "thriller",
        label: "Thriller",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "western",
        label: "Western",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "horror",
        label: "Horror",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "fantasy",
        label: "Fantasy",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "music",
        label: "Music",
        image: <img src={Action} alt="action" width={200} height={200} />
    }, {
        id: "fiction",
        label: "Fiction",
        image: <img src={Action} alt="action" width={200} height={200} />
    },
]
export default function Selector() {
    const [selected, setSelected] = useState([])
    const handleSelection = (movie) => {
        // if movie is already selected, remove it from the array
        if (selected.includes(movie)) {
            setSelected(selected.filter((data) => data.id != movie.id))
        }
        // else add it to the array
        else {
            setSelected([...selected, movie])
        }
    }
    return (
        <div>
            <h1>Selector</h1>
            <div className={styles.container}>
                {Movies.map((movie) => (
                    <div style={{
                        borderColor: selected.includes(movie) ? "green" : "black"
                    }} onClick={() => handleSelection(movie)} key={movie.id}>
                        <h2>{movie.label}</h2>
                        {movie.image}
                    </div>
                ))}
            </div>
            <div className={styles.chipContainer}>
                {selected.map((movie) => (
                    <div key={movie.id}>
                        <p>{movie.label}
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <span className={styles.closeIcon} onClick={() => handleSelection(movie)}>X</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}