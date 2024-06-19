import Title from '@/components/Title';
import Link from 'next/link';

interface BoardListItemProps {
    boardId: string;
    title: string;
    content: string;
    createdAt: string;
}

const BoardListItem = ({ boardId, title, content, createdAt }: BoardListItemProps) => {
    content = content.length > 100 ? content.slice(0, 100) + '...' : content;
    return (
        <Link href={`/board/detail/${boardId}`}>
            {' '}
            <div className="flex flex-col gap-4 py-9 border-b border-lightGray cursor-pointer">
                <Title>{title}</Title>
                <p className="font-Pretendard">{content}</p>
                <p className="text-gray text-sm">{createdAt}</p>
            </div>
        </Link>
    );
};

export default BoardListItem;
