import { useState } from 'react';

const useFormFields = () => {
    const [fields, setFields] = useState({});

    const updateField = e =>
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });

    return { fields, updateField };
};

export default useFormFields;
