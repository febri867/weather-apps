interface Props {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    searchWeather: React.MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
}

export default function SearchInput(props: Props){
    const {
        city,
        setCity,
        searchWeather,
        loading,
    } = props
    return (
        <div className="mb-8 flex gap-3">
            <input
                value={city}
                onChange={(e) =>
                    setCity(e.target.value)
                }
                placeholder="Search city..."
                className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
                onClick={searchWeather}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
            >
                {loading ? "Loading..." : "Search"}
            </button>
        </div>
    )
}