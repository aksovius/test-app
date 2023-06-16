'use client'
import React, { useEffect, useState } from 'react';
import Modal from '../components/AddUser/Modal';
import styles from './page.module.css'
import AddUserForm from '../components/AddUser/AddUserForm';

export async function getUsers() {
    const res = await fetch('https://random-data-api.com/api/v2/users?size=20')
    return res.json()
}

export default function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        getUsers().then(users => { setUsers(users) })
    }, [])

    return <div className={styles.container}>
        <div className={styles.row}>
            <button
                className={styles.addUserButton}
                onClick={() => setIsModalOpen(!isModalOpen)}>
                사용자 추가
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
             
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>성명</th>
                    <th>성별</th>
                    <th>전화번호</th>
                    <th>우편번호</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: any) => {
                    return <tr key={user?.id}>
                        <td>{user?.first_name}</td>
                        <td>{user?.gender}</td>
                        <td>{user?.phone_number}</td>
                        <td>{user?.address?.zip_code}</td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
}