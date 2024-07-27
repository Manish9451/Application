import React, { useState } from "react";
import { Box, Button, Input, Radio, Stack, Text } from "native-base";

const Forms = () => {
    const fields = [
        { label: "name", type: "text" },
        { label: "age", type: "number" },
        { label: "Phone Number", type: "tel" },
        { label: "Password", type: "password" },
        { label: "Gender", type: "radio", options: ["Male", "Female", "Other"] },
    ];

    const initialFormData = fields.reduce((acc, field) => {
        acc[field.label] = "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (label, value) => {
        setFormData((prevData) => ({ ...prevData, [label]: value }));
    };

    const SaveData = async () => {
        const url = "http://192.168.29.98:3000/users";
        try {
            let result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (result.ok) {
                console.log("Data saved successfully!");
                // Optionally reset form
                setFormData(initialFormData);
            } else {
                console.error("Error saving data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Box alignItems="center" w="90%" mx="5%">
            {fields.map((field) => {
                switch (field.type) {
                    case "text":
                    case "tel":
                    case "number":
                    case "password":
                        return (
                            <Input
                                key={field.label}
                                mx="3"
                                placeholder={field.label}
                                w="100%"
                                value={formData[field.label]}
                                keyboardType={field.type === "number" ? "numeric" : "default"}
                                secureTextEntry={field.type === "password"}
                                onChangeText={(value) => handleInputChange(field.label, value)}
                            />
                        );
                    case "radio":
                        return (
                            <Stack key={field.label} mx="3" w="100%">
                                <Box>{field.label}</Box>
                                <Radio.Group
                                    name={field.label}
                                    value={formData[field.label]}
                                    onChange={(value) => handleInputChange(field.label, value)}
                                >
                                    {field.options.map((option) => (
                                        <Radio key={option} value={option} my="1">
                                            {option}
                                        </Radio>
                                    ))}
                                </Radio.Group>
                            </Stack>
                        );
                    default:
                        return null;
                }
            })}

            <Button success onPress={SaveData}>
                <Text>Save</Text>
            </Button>
        </Box>
    );
};

export default Forms;
