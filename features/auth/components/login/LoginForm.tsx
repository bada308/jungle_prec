'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postLogin } from '../../apis/login';

interface LoginData {
    userId: string;
    password: string;
}

const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginData>();
    const onSubmit: SubmitHandler<LoginData> = (data) => {
        postLogin(data).then((res) => {
            console.log(res);
            if (res.msg === '로그인 성공') {
                alert('로그인 성공');
            } else {
                alert('로그인 실패');
            }
        });
    };

    return (
        <form className="flex flex-col gap-14" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold w-full text-center">Login</h1>
            <div className="w-96 space-y-6">
                <BorderedInput name="userId" placeholder="아이디 입력" label="아이디" register={register} required />
                <BorderedInput
                    name="password"
                    placeholder="비밀번호 입력"
                    type="password"
                    label="비밀번호"
                    register={register}
                    required
                />
            </div>
            <Button color="black" size="lg">
                로그인
            </Button>
        </form>
    );
};

export default LoginForm;
