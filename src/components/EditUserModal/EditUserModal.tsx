import React, { useState } from "react";
import { User } from "../../types";
import styles from "./EditUserModal.module.css";

interface EditUserModalProps {
    user: User;
    onClose: () => void;
    onSave: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
    const [form, setForm] = useState<User>({ ...user, _id: user._id });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(form);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="edit-name">Name:</label>
                    <input
                        id="edit-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="edit-age">Age:</label>
                    <input
                        id="edit-age"
                        name="age"
                        type="number"
                        value={form.age}
                        onChange={handleChange}
                        required
                        min={0}
                    />
                    <label htmlFor="edit-email">Email:</label>
                    <input
                        id="edit-email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="edit-password">Password:</label>
                    <input
                        id="edit-password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="edit-phone">Phone:</label>
                    <input
                        id="edit-phone"
                        name="phone"
                        type="number"
                        value={form.phone ?? ""}
                        onChange={handleChange}
                    />
                    <div className={styles.buttonGroup}>
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;
