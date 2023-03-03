import { useEvervault } from '@evervault/react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client'

export default function Component() {
    const evervault = useEvervault();
    const [name, setName] = useState('')
    const [encryptedName, setEncrypted] = useState('')

    // Handles encrypting the string.
    const handleEncrypt = async (event) => {
        event.preventDefault()
        const encryptedName = await evervault.encrypt(name);
        setEncrypted(encryptedName)

        const root = ReactDOM.createRoot(
            document.getElementById('decrypt')
        );
        const element = <p>{encryptedName}</p>
        root.render(element);
        return encryptedName
    }


    // Handles decrypting the string.
    const handleDecrypt = async (event) => {
        event.preventDefault()

        const JSONdata = JSON.stringify({ name: encryptedName })
        const endpoint = '/api/decrypt'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const result = await response.json()
        alert(`Your decrypted name: ${result.name}`)
    }

    return (
        <>
            <div>
                <form onSubmit={handleEncrypt}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <button type="submit">Encrypt</button>
                </form>
            </div>
            <div>
                <div id="decrypt"></div>
                <button onClick={handleDecrypt}>Decrypt</button>
            </div>
        </>
    )
};