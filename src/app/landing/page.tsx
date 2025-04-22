export default function Landing() {
    return (
        <div>
            <div className="flex items-center justify-center mt-10 flex-col">
                <span className="text-4xl font-bold">Your One-Stop Shop for </span>
                <span className="text-6xl font-extrabold">Everything Gacha</span>
            </div>

            <div className="p-20">
                <p>
                    With this site, you can do the following things to help
                    augment your gacha gaming experience
                </p>

                <ul className="list-disc flex flex-col p-6">
                    <li>See who&lsquo;s banner is currently active</li>
                    <li>View active builds</li>
                    <b>For Hoyoverse Games</b>
                    <li>Check pity</li>
                </ul>
            </div>
        </div>
    );

}
