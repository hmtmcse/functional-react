import {useContext} from "mfront";

export default function Page2() {
    const config = useContext((state) => state.config);
    return (
        <>
            {config.apiBaseUrl}
            <h4>Page 2</h4>
        </>
    )
}