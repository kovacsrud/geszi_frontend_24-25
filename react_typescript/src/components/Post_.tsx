
type Post={
  "userId":number,
  "id":number,
  "title":string,
  "body":string
}

type PostProps={
  post:Post
}

function Post_({post}:PostProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Post_