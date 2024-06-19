import { BoardInfoDto } from '../../apis/dtos';
import BoardListItem from './BoardListItem';

interface BoardListProps {
    boardList: BoardInfoDto[];
}

const BoardList = ({ boardList }: BoardListProps) => {
    return (
        <div className="space-y-8 p-12">
            {boardList.map((board) => (
                <BoardListItem key={board.boardId} {...board} />
            ))}
        </div>
    );
};

export default BoardList;
