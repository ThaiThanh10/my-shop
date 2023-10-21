import { ErrorMessage } from "@hookform/error-message"
import { Input, Form } from "antd"
import React from "react"
import { Controller } from "react-hook-form"

const InputField = (props) => {
    const { form, name, label, errors, touchedFields } = props
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <Form.Item
                    required
                    tooltip="This is a required field"
                >
                    <label >{label}</label>
                    <Input
                        {...field}
                        style={{
                            marginTop: "8px"
                        }}
                        placeholder={label}
                    />
                    <ErrorMessage
                        name={name}
                        touchedFields={touchedFields}
                        render={({ message }) => <p className="text-red-500">{message}</p>}
                        errors={errors}
                    />
                </Form.Item>
            )}
        />
    )
}

export default InputField
