import { useSingle } from "./hooks";
import { handleSetColorByGender } from "./helpers";

export const Single = () => {
    const { data, isLoading } = useSingle();

    return (
        <div>
            <h2>Single Responsability Principle</h2>

            {isLoading && <div>Loading ...</div>}

            {data?.map((item) => (
                <div
                    key={item.cell}
                    style={{ color: handleSetColorByGender(item.gender) }}>
                    {item.name.first}
                </div>
            ))}
        </div>
    )
}