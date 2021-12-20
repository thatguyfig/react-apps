import CommentForm from './form'
import CommentList from './list'
import useComments from '../../hooks/useComment'

function Comment() {
  const { text, setText, comments, onSubmit, onDelete } = useComments()

  return (
    <div className="max-w-2xl mx-auto">
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  )
}

export default Comment