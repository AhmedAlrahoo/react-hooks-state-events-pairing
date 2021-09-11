import video from "../data/video.js";
import {useState} from "react"
function App() {
  console.log("Here's your data:", video);
  const [likes, setLikes] = useState(video.upvotes)
  const [disLikes, setDisLikes] = useState(video.downvotes)
  const [comments, setComments] = useState(true)
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <h4>
        {video.views} Views | Uploaded {video.createdAt}
      </h4>
      <button onClick={()=>setLikes(likes+1)}>{likes} 👍</button>
      <button onClick={()=>setDisLikes(disLikes+1)}>{disLikes} 👎</button>
      <button onClick={()=>setComments(!comments)}>Hide Comments</button>
      <div style={{display: comments ? "block" : "none"}}>
        <h2>Comments {video.comments.length}</h2>
        {video.comments.map((comment)=>{
          return (
            <>
            <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
          </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
