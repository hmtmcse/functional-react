import { useEffect, useRef, useState } from "react";
import { toast } from "@mfront/mfront-ui/code/component/toast-box.tsx"

// NOT WORKING

interface InputFieldProps {
    name: string
    type?: string
    placeholder?: string
    defaultValue?: any
    formStore: Map<string, any>
}

export function InputField({
    name,
    type = "text",
    placeholder,
    defaultValue,
    formStore
}: InputFieldProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    // apply default value when async data arrives
    useEffect(() => {
        if (defaultValue !== undefined && inputRef.current) {
            inputRef.current.value = defaultValue
            formStore.set(name, defaultValue)
        }
    }, [defaultValue])

    const handleChange = (e: any) => {
        formStore.set(name, e.target.value)
    }

    return (
        <input
            ref={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={handleChange}
        />
    )
}

export default function Form2Page() {

    const formStore = useRef(new Map()).current
    const [defaultData, setDefaultData] = useState<any>(null)

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

        // preload form store
        Object.entries(data).forEach(([k, v]) => {
            formStore.set(k, v)
        })

        setDefaultData(data)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const data = Object.fromEntries(formStore)

        console.log(data)

        toast({
            content: "Submitted",
            type: "success",
        })
    }

    return (
        <>
            <button onClick={loadData}>
                Load Mock Data
            </button>

            <form onSubmit={handleSubmit}>

                <br/>

                <InputField
                    name="name"
                    placeholder="Name"
                    defaultValue={defaultData?.name}
                    formStore={formStore}
                />

                <br/><br/>

                <InputField
                    name="email"
                    type="email"
                    placeholder="Email"
                    defaultValue={defaultData?.email}
                    formStore={formStore}
                />

                <br/><br/>

                <InputField
                    name="phone"
                    placeholder="Phone"
                    defaultValue={defaultData?.phone}
                    formStore={formStore}
                />

                <br/><br/>

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    )
}