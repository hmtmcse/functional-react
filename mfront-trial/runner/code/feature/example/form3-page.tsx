import {useEffect, useRef, useState} from "react";
import * as React from "react";

interface InputFieldProps {
    name: string
    type?: string
    placeholder?: string
    defaultValue?: any
    valueStore: Map<string, unknown>
}

export function InputField({
    name,
    type = "text",
    placeholder,
    defaultValue,
    valueStore
}: InputFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (defaultValue !== undefined && inputRef.current) {
            inputRef.current.value = defaultValue
            valueStore.set(name, defaultValue)
        }
    }, [defaultValue])

    const handleChange = (e: any) => {
        valueStore.set(name, e.target.value)
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

interface FormInputFieldProps {
    name: string
    type?: string
    placeholder?: string
    defaultValue?: any
}

interface FormProps {
    inputs: FormInputFieldProps[]
    inputValues?: any
}


function Form({inputs, inputValues}: FormProps & React.ComponentProps<"form">) {
    const formStore = useRef(new Map()).current
    const [defaultData, setDefaultData] = useState(null)
    const [version, setVersion] = useState(0)

    useEffect(() => {
        console.log(inputValues)
        if (!inputValues) {
            return
        }
        formStore.clear()
        Object.entries(inputValues).forEach(([k, v]) => {
            formStore.set(k, v)
        })
        setDefaultData(inputValues)
        setVersion(v => v + 1)
    }, [inputValues])


    return (
        <>
            <form key={`form-${version}`}>
                {inputs.map((input, index) => (
                    <React.Fragment key={index}>
                        <br/>
                        <br/>
                        <InputField defaultValue={defaultData?.[input.name]} valueStore={formStore} {...input}/>
                    </React.Fragment>
                ))}
            </form>
        </>
    )
}


export default function Form3Page() {
    const [inputValues, setInputValues] = useState(null)

    const inputs: FormInputFieldProps[] = [
        {name: "name", placeholder: "Name"},
        {name: "email", type: "email", placeholder: "Email"},
        {name: "phone", placeholder: "Phone"},
    ]

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
        setInputValues(data)
    }


    return (
        <div>
            <button onClick={loadData}>
                Load Mock Data
            </button>
            {<Form inputValues={inputValues} inputs={inputs}/>}
        </div>
    );
}