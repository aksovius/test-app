'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Modal from '../components/Modal/Modal';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import styles from './page.module.css'
import { InputForm, User } from './UsersTypes';

export async function getUsers() {
    const res = await fetch('https://random-data-api.com/api/v2/users?size=20')
    return res.json()
}


export default function Users() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasInitialLoad, setHasInitialLoad] = useState(false); // initial load
    const loader: RefObject<HTMLTableRowElement> = useRef<HTMLTableRowElement>(null);
 
    useEffect(() => {
        setIsLoading(true)
        getUsers().then(users => { 
            setUsers(users) 
            setIsLoading(false)
            setHasInitialLoad(true)
        })
    }, [])

    // load more data 
    useInfiniteScroll(loader, ()=> {
        if (isLoading || !hasInitialLoad) return;
        setIsLoading(true)
        getUsers().then(users => { 
            setUsers((prev: User[]) => [...prev, ...users])
            setIsLoading(false)
         })
    })

    const handleSubmit = (input: InputForm) => {
        const user = {
            first_name: input.name,
            gender: input.gender,
            phone_number: input.phone,
            address: {
                zip_code: input.postalcode
            }
        }
        setUsers([user, ...users])
    }
    if (!hasInitialLoad) return <div>Loading...</div> // Prevents the table from rendering before the initial load SSR 
    return <div className={styles.container}>
        <div className={styles.row}>
            <button
                id='add-user'
                className={styles.addUserButton}
                onClick={() => setIsModalOpen(!isModalOpen)}>
                사용자 추가
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit}/>
             
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
                 <tr ref={loader} id='loader'><td colSpan={4}>Loading...</td></tr>
            </tbody>
        </table>

    </div>
}