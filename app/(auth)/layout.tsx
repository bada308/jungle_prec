import Header from '@/components/Header';

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            <main className="flex flex-1 flex-col items-center justify-center w-full mt-20 h-fit bg-white">
                {children}
            </main>
        </>
    );
};

export default AuthLayout;
