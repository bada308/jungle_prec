interface SignupReq {
    userId: string;
    password: string;
}

export const postSignup = async (signupReq: SignupReq) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': '69420',
        },
        body: JSON.stringify(signupReq),
    });
    const data = await res.json();
    return data;
};
