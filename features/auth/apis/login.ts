import { cookies } from 'next/headers';

interface LoginReq {
    userId: string;
    password: string;
}

export const postLogin = async (loginReq: LoginReq) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': '69420',
        },
        credentials: 'include',
        body: JSON.stringify(loginReq),
    });
    const data = await res.json();
    return data;
};
