const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-full h-full lg:grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">Side Section (Image section)</div>
            <main className="lg:col-span-1">{children}</main>
        </div>
    </div>
);
};

export default AuthenticationLayout