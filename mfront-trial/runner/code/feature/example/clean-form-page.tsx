import {createContext, useContext, useRef, useEffect} from "react"

const FormContext = createContext<any>(null)

export function FormProvider({children}: any) {

    const store = useRef(new Map()).current
    const refs = useRef(new Map()).current

    const register = (name: string, el: any) => {
        refs.set(name, el)
    }

    const unregister = (name: string) => {
        refs.delete(name)
    }

    const setValue = (name: string, value: any) => {
        store.set(name, value)
        const el = refs.get(name)
        if (el) el.value = value ?? ""
    }

    const setValues = (data: any) => {
        Object.entries(data).forEach(([k, v]) => {
            setValue(k, v)
        })
    }

    const getValues = () => {
        return Object.fromEntries(store)
    }

    return (
        <FormContext.Provider value={{
            register,
            unregister,
            setValue,
            setValues,
            getValues,
            store
        }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)

export function InputField({
                               name,
                               type = "text",
                               placeholder
                           }: any) {

    const {register, unregister, store} = useForm()
    const ref = useRef<any>(null)

    useEffect(() => {
        if (ref.current) {
            register(name, ref.current)
        }
        return () => unregister(name)
    }, [])

    const handleChange = (e: any) => {
        store.set(name, e.target.value)
    }

    return (
        <input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

/* ✅ FIXED: useForm is now inside provider */
export default function CleanFormPage() {
    return (
        <FormProvider>
            <FormContent/>
        </FormProvider>
    )
}

function FormContent() {

    const form = useForm()

    const mockApiCall = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: "Touhid Mia",
                    email: "touhid@banglafighter.com",
                    phone: "01300000000",
                })
            }, 2000)
        })
    }

    const loadData = async () => {
        const data: any = await mockApiCall()
        console.log(data)
        form.setValues(data)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(form.getValues())
    }

    return (
        <>
            <button onClick={loadData}>Load</button>

            <form onSubmit={handleSubmit}>
                <InputField name="name" placeholder="Name"/>
                <br/><br/>

                <InputField name="email" type="email" placeholder="Email"/>
                <br/><br/>

                <InputField name="phone" placeholder="Phone"/>
                <br/><br/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}