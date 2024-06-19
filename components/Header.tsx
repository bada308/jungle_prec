'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Button from './Button';
import UserInfo from './UserInfo';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full h-20 border-b border-lightGray flex justify-between items-center px-10 fixed top-0 bg-white">
            <HeaderContent />
        </header>
    );
};

/* FIXME: HeaderContent URL 별로 분리하기 */
const HeaderContent = () => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === '/board/list') {
        return (
            <>
                <div />
                <div className="flex gap-4 items-center">
                    <UserInfo username="강바다" />
                    <div>
                        <Link href="/board/create">
                            <Button color="white" size="md">
                                새 글 작성
                            </Button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    if (pathname === '/board/create') {
        return (
            <>
                <Image
                    src="/icons/arrow_left.svg"
                    width={28}
                    height={28}
                    alt="뒤로가기"
                    className="cursor-pointer"
                    onClick={() => router.back()}
                />
                <Button color="blue" size="md">
                    제출하기
                </Button>
            </>
        );
    }

    if (pathname.startsWith('/board/detail')) {
        return (
            <>
                <Image
                    src="/icons/arrow_left.svg"
                    width={28}
                    height={28}
                    alt="뒤로가기"
                    className="cursor-pointer"
                    onClick={() => router.back()}
                />
                <UserInfo username="강바다" />
            </>
        );
    }

    if (pathname === '/login' || pathname === '/signup') {
        return (
            <>
                <div />
                <div className="flex gap-2">
                    <Link href="/login">
                        <Button color="gray" size="md">
                            로그인
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button color="white" size="md">
                            회원가입
                        </Button>
                    </Link>
                </div>
            </>
        );
    }

    return <></>;
};

export default Header;
