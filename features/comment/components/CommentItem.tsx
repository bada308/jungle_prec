interface CommentItemProps {
    author: string;
    createdAt: string;
    comment: string;
}

const CommentItem = ({ author, createdAt, comment }: CommentItemProps) => {
    return (
        <div className="flex flex-col gap-3 h-fit">
            <div className="text-sm flex gap-2">
                <span className="text-darkGray">{author}</span>
                <span className="text-gray">{createdAt}</span>
            </div>
            <span>{comment}</span>
        </div>
    );
};

export default CommentItem;
