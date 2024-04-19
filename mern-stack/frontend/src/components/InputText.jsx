import { Input } from "@nextui-org/react";
import { useMemo } from "react";

export default function InputText({type, value, setValue, label, invalidText}) {

    const isInvalid = useMemo(() => {
        if (value === "") return true;
        if (type === "number") {
            if (value < 0) {
                invalidText = "กรุณากรอกจำนวนให้ถูกต้อง";
                return true;                  
            } else {
                invalidText = {invalidText};
            }
        }
      }, [value]);

    return (
        <Input 
        className="my-5 text-white"
        size="lg"
        type={type}
        value={value}
        onValueChange={setValue}
        isClearable
        label={label}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        variant="bordered"
        errorMessage={isInvalid && `${invalidText}`}
        />
    )
}