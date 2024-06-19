import { CommentInfoDto } from '../apis/dtos';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';

interface CommentContainerProps {
    comments: CommentInfoDto[];
}

const CommentContainer = ({ comments }: CommentContainerProps) => {
    return (
        <div className="flex flex-col gap-2 w-full px-12 h-fit py-4">
            <CommentEditor />
            <CommentList comments={comments} />
        </div>
    );
};

export default CommentContainer;
