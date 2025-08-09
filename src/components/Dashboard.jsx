import ImageCard from "./ImageCard"
import VideoCard from "./VideoCard"

const Dashboard = () => {
    return (
        <main>
            <h2>Welcome to Nimbus AI</h2>
            <input className="main-search" placeholder="Search in Nimbus" value={""} />
            <div className="uploads-container">
                <ImageCard/>
                <VideoCard/>
            </div>
        </main>
    )
}

export default Dashboard