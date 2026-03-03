
export interface TestProps {
    position: any;
    autoCloseMS: number | false;
    pauseOnFocusLoss?: boolean;
    pauseOnHover?: boolean; // Pause the timer when the mouse hover the toast
}

const defaultProps: Partial<TestProps> = {
    pauseOnHover: false,
    pauseOnFocusLoss: true
}

function setPropsDefault<T>(incoming: Partial<T>, defaults: Partial<T>): T {
    return {...defaults, ...incoming} as T
}

export default function PropsTest(props: TestProps){
    let modifiedProps : TestProps = setPropsDefault<TestProps>(props, defaultProps)
    return (
        <>
            Test {`${modifiedProps.position} ${modifiedProps.pauseOnHover}`}
        </>
    )
}