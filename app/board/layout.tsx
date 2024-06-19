import Header from '@/components/Header';

const BoardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            <main className="flex flex-1 flex-col w-[1000px] mt-16 h-fit bg-white">{children}</main>
        </>
    );
};

export default BoardLayout;
