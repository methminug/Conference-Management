import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

const AddPaper = () => {
    const { material, setMaterial, setUserData } =
        useContext(RegisterDataContext);
    const allowedTypes = [
        "application/pdf",
        "application/x-zip-compressed",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.ms-powerpoint",
    ];

    const fileChangeHandler = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setMaterial({ ...material, name: selectedFile.name });
            setError("");
        } else {
            setFile(null);
            setError(
                "Select valid type. (only pdf, presentation and zip files are allowed)"
            );
        }
    };

    const handleMaterial = async () => {
        const response = await fetch(
            //submit new research paper to approve
            `http://localhost:3000/publication/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(material),
            }
        );

        if (response.ok) {
            setUserData({});
            setMaterial({});
            toast.success("Your publication submited");
        } else {
            toast.error("Sorry, something went wrong.");
        }
    };

    return (
        <div className="name-info">
            <div className="first-name">
                <label htmlFor="topic">Publication Topic</label>
                <input
                    type="text"
                    name="topic"
                    id="topic"
                    required
                    autoComplete="off"
                    value={material.topic}
                    onChange={(e) =>
                        setMaterial({ ...material, topic: e.target.value })
                    }
                />
            </div>
            <div className="last-name">
                <label htmlFor="material">Upload your materials</label>
                <input
                    type="file"
                    accept=".pdf, .zip, .rar, .ppt, .pptx"
                    name="material"
                    id="material"
                    required
                    autoComplete="off"
                    maxLength="3"
                    onChange={fileChangeHandler}
                />
            </div>
            <button
                type="submit"
                className="gradient-cta"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
                onClick={handleMaterial}
            >
                Publish
            </button>
        </div>
    );
};

export default AddPaper;
