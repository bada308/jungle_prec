'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { useState } from 'react';

const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="flex flex-col gap-14">
            <h1 className="text-4xl font-bold w-full text-center">Login</h1>
            <div className="w-96 space-y-6">
                <BorderedInput
                    id="login-id"
                    value={userId}
                    setValue={(v) => setUserId(v)}
                    placeholder="아이디 입력"
                    label="아이디"
                />
                <BorderedInput
                    id="login-password"
                    value={password}
                    setValue={(v) => setPassword(v)}
                    placeholder="비밀번호 입력"
                    type="password"
                    label="비밀번호"
                />
            </div>
            <Button color="black" size="lg">
                로그인
            </Button>
        </div>
    );
};

export default LoginForm;
