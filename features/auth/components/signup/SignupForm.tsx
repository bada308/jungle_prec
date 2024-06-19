'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    return (
        <div className="flex flex-col gap-14">
            <h1 className="text-4xl font-bold w-full text-center">Sign Up</h1>
            <div className="w-96 space-y-6">
                <BorderedInput
                    id="username"
                    value={name}
                    setValue={(v) => setName(v)}
                    placeholder="이름 입력"
                    label="이름"
                >
                    <Button color="black" size="md">
                        중복확인
                    </Button>
                </BorderedInput>
                <BorderedInput
                    id="userId"
                    value={userId}
                    setValue={(v) => setUserId(v)}
                    placeholder="아이디 입력"
                    label="아이디"
                >
                    <Button color="black" size="md">
                        중복확인
                    </Button>
                </BorderedInput>
                <BorderedInput
                    id="password"
                    value={password}
                    setValue={(v) => setPassword(v)}
                    placeholder="비밀번호 입력"
                    type="password"
                    label="비밀번호"
                />
                <BorderedInput
                    id="password-check"
                    value={passwordCheck}
                    setValue={(v) => setPasswordCheck(v)}
                    placeholder="비밀번호 다시 입력"
                    type="password"
                    label="비밀번호 확인"
                />
            </div>
            <Button color="black" size="lg">
                회원가입
            </Button>
        </div>
    );
};

export default SignupForm;
