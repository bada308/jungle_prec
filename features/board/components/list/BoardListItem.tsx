import Title from '@/components/Title';

interface BoardListItemProps {
    title: string;
    content: string;
    createdAt: string;
}

const BoardListItem = ({ title, content, createdAt }: BoardListItemProps) => {
    content = content.length > 100 ? content.slice(0, 100) + '...' : content;
    return (
        <div className="flex flex-col gap-4 py-9 border-b border-lightGray">
            <Title>{title}</Title>
            <p className="font-Pretendard">{content}</p>
            <p className="text-gray text-sm">{createdAt}</p>
        </div>
    );
};

export default BoardListItem;
