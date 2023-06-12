import styles from './page.module.css'

export async function getUsers() {
    console.log('Getting users...');
    const res = await fetch('https://random-data-api.com/api/v2/users?size=20')
    return res.json()
}

export default async function Users() {
    const users = await getUsers();
    
    return <div>
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