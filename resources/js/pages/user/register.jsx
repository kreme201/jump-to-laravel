import Layout from "@/components/Layout.jsx";
import {useForm} from "@inertiajs/react";
import InputField from "@/components/fields/InputField.jsx";
import PrimaryButton from "@/components/PrimaryButton.jsx";

export default function () {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("user.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Layout>
            <h5 className="my-3 border-bottom pb-2">회원 가입</h5>

            <form method="post" onSubmit={handleSubmit}>
                <InputField type="name" label="이름" value={data.name} setValue={value => setData("name", value)} error={errors.name} />
                <InputField type="email" label="이메일" value={data.email} setValue={value => setData("email", value)} error={errors.email} />
                <InputField type="password" label="비밀번호" value={data.password} setValue={value => setData("password", value)} error={errors.password} />
                <InputField type="password" label="비밀번호 확인" value={data.password_confirmation} setValue={value => setData("password_confirmation", value)} error={errors.password_confirmation} />

                <PrimaryButton type="submit">생성하기</PrimaryButton>
            </form>
        </Layout>
    );
}
