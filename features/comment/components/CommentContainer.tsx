import CommentEditor from './CommentEditor';
import CommentList from './CommentList';

const CommentContainer = () => {
    return (
        <div className="flex flex-col gap-2 w-full px-12 h-fit py-4">
            <CommentEditor />
            <CommentList />
        </div>
    );
};

export default CommentContainer;
