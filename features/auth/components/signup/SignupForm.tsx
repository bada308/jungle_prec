'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postSignup } from '../../apis/signup';
import { useRouter } from 'next/navigation';

interface SignupData {
    userId: string;
    password: string;
    passwordCheck: string;
}

const SignupForm = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<SignupData>();
    const onSubmit: SubmitHandler<SignupData> = (data) => {
        postSignup({ userId: data.userId, password: data.password }).then((res) => {
            if (res.msg === '회원가입이 완료되었습니다.') {
                alert('회원가입 성공');
                router.push('/login');
            } else {
                alert('회원가입 실패');
            }
        });
    };
    return (
        <form className="flex flex-col gap-14" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold w-full text-center">Sign Up</h1>
            <div className="w-96 space-y-6">
                <BorderedInput name="userId" placeholder="아이디 입력" label="아이디" register={register} required>
                    <Button color="black" size="md">
                        중복확인
                    </Button>
                </BorderedInput>
                <BorderedInput
                    name="password"
                    placeholder="비밀번호 입력"
                    type="password"
                    label="비밀번호"
                    register={register}
                    required
                />
                <BorderedInput
                    name="passwordCheck"
                    placeholder="비밀번호 다시 입력"
                    type="password"
                    label="비밀번호 확인"
                    register={register}
                    required
                />
            </div>
            <Button color="black" size="lg" type="submit">
                회원가입
            </Button>
        </form>
    );
};

export default SignupForm;
