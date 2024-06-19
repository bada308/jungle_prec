import { CommentInfoDto } from '../apis/dtos';
import CommentItem from './CommentItem';
interface CommentListProps {
    comments: CommentInfoDto[];
}
const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div className="flex flex-col gap-12 w-full h-fit py-10">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.commentId}
                    comment={comment.comment}
                    author={comment.author.username}
                    createdAt={comment.createdAt}
                />
            ))}
        </div>
    );
};

export default CommentList;
