export default function AboutLayout({children}:{children:React.ReactNode}) {
    return (
        <div>
            <div className="h-24 w-full bg-blue-900">
                <h1 className="text-white text-3xl">About</h1>
            </div>
            {children}
        </div>
    );
}

