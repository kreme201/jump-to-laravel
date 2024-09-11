import InputField from "@/components/fields/InputField";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function () {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <Layout>
            <h5 className="my-3 border-bottom pb-2">로그인</h5>

            <form method="post" onSubmit={handleSubmit}>
                <InputField
                    type="email"
                    label="이메일"
                    value={data.email}
                    setValue={(value) => setData("email", value)}
                    error={errors.email}
                />
                <InputField
                    type="password"
                    label="비밀번호"
                    value={data.password}
                    setValue={(value) => setData("password", value)}
                    error={errors.password}
                />
                <PrimaryButton type="submit">로그인</PrimaryButton>
            </form>
        </Layout>
    );
}
